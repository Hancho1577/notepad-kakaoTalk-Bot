var command_write = "/메모 작성"; //메모 작성 명령어
var command_read = "/메모 읽기"; //메모 읽기용 명령어
var command_save = "/메모 저장"; //메모 저장 명령어
var blank = "\0".repeat(500);
var note_address = "sdcard/bot/note.txt"; //메모 저장 위치
var autosave = true; //메모 자동저장 여부
var autosave_count = 0;
var autosave_ = 10; //메세지 10회마다 자동저장
var is_edited = false;
var note = [];
var is_first = true;
var memory_room = true;

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
  if (is_first) { //메모 로드
    var temp = FileStream.read(note_address);
    if (!temp) temp = "[]";
    note = JSON.parse(temp);
    is_first = false;
  }
  if (msg.indexOf(command_write) == 0) { //메모 쓰기
    var content = msg.substring(command_write.length + 1).trim();
    if (!content) {
      replier.reply("메모 내용을 입력해 주세요!\n사용방법:" + command_write + " <메모 내용>");
    } else {
      if (memory_room) {
        if (!note[room]) note[room] = {};
        note[room][sender] = content;
      } else note[sender] = content;
      replier.reply("메모작성 완료!" + blank + "\n\n" + content + " 라고 메모가 작성되었습니다.");
    }

  }
  if (msg == command_read) { //메모 읽기
    if (memory_room) {
      if (!note[room]) replier.reply("작성된 메모가 없습니다.");
      else replier.reply(note[room][sender] ? note[sender] : "작성된 메모가 없습니다.");
    } else replier.reply(note[sender] ? note[sender] : "작성된 메모가 없습니다.");
  }
  if (autosave) {
    autosave_count++;
    if (autosave_count >= autosave_) { //메모 자동저장
      try {
        FileStream.write(note_address, JSON.stringify(note));
      } catch (e) {
        Log.error(e);
      }
    }
  }
  if (msg == command_save) {
    FileStream.write(note_address, JSON.stringify(note));
    replier.reply("메모가 저장되었습니다.");
  }
}

function onStartCompile() {
  FileStream.write(note_address, JSON.stringify(note));
}

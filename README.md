# notepad-kakaoTalk-Bot
카카오톡 봇 메모기능 (messenger bot 호환)

## 기본 명령어
```
/메모 쓰기 <메모 내용>   - 메모 작성하기
/메모 읽기   - 작성된 메모 읽기
/메모 저장   - 메모 수동저장
```

## 옵션
| Option | Type | 설명 | 기본값 |  	
| --- | --- | --- | --- |
| command_write | string | 메모 작성 명령어 | "/메모 작성" |
| command_read | string | 메모 읽기 명령어 | "/메모 읽기" |
| command_save | string | 메모 수동저장 명령어 | "/메모 저장" |
| note_address | string | 메모 데이터 저장위치 | "sdcard/bot/note.txt" |
| autosave | boolean | 메모 데이터 자동저장 여부 | true |
| autosave_ | Number | 값만큼 메세지가 왔을 때 저장합니다 | 10 |
| memory_room | boolean | true일경우 방마다 메모를 따로 저장합니다 | true |

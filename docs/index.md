# 🥝 Kiwi Wiki: 게임 프로젝트 위키

<table class="infobox">
  <tr>
    <th colspan="2">🥝 Kiwi Wiki 운영 정보</th>
  </tr>
  <tr>
    <td colspan="2" style="text-align: center; background-color: white;">
      <span style="font-size: 50px;">🥝</span><br>
      <strong>프로젝트 마스코트: 키위</strong>
    </td>
  </tr>
  <tr>
    <td class="label">운영자</td>
    <td>사용자 (User)</td>
  </tr>
  <tr>
    <td class="label">사이트 주소</td>
    <td><a href="https://example.com">kiwi-wiki.io</a></td>
  </tr>
  <tr>
    <td class="label">최근 수정</td>
    <td>2026-02-21</td>
  </tr>
</table>

환영합니다! 이 사이트는 저희가 개발한 **두 가지 게임 프로젝트**와 그 과정에서 사용된 **기술 스택**을 소개하는 공간입니다.

## 🎮 소개할 게임 목록

???+ info "게임 목록 확인하기 (접기)"
    현재 다음 두 가지 프로젝트가 등록되어 있습니다.

    *   [**AlloutFPS**](AlloutFPS.md) : 격렬한 액션을 담은 1인칭,3인칭 슈팅 게임.
    *   **RE-GENESIS**: 포스트 아포칼립스 세계관에서 변이체의 유전자를 추출해 생존하는 게임.

## 🛠️ 주요 사용 기술

각 프로젝트는 다양한 최신 기술을 활용하여 제작되었습니다.

??? abstract "사용 기술 상세 정보 (접기)"
    *   **게임 엔진**: Unity, Unreal Engine 등
    *   **프로그래밍 언어**: C#, C++, Python 등
    *   **그래픽 및 도구**: Blender, Adobe Suite 등

자세한 내용은 상단 메뉴의 **게임목록**과 **사용기술** 탭에서 확인하실 수 있습니다.

---

### 💡 팁: 새로운 요소를 추가하려면?
질문하신 대로 **새로운 요소를 추가할 때는 `.md` 파일을 추가하는 것이 가장 좋습니다.** 

1.  **새 문서 만들기**: `docs/` 폴더 내에 새로운 `.md` 파일을 만듭니다 (예: `docs/new-game.md`).
2.  **메뉴에 등록**: `mkdocs.yml`의 `nav` 섹션에 파일 경로를 추가합니다.
3.  **틀 사용**: 위 예시처럼 `<table>` 코드를 복사해서 제목 아래에 넣으면 바로 나무위키 느낌의 정보 박스를 만들 수 있습니다.


<hr>
<div style="background: #2c3e50; color: white; padding: 15px; border-radius: 10px; text-align: center; margin-top: 20px;">
  <p style="margin: 0; font-size: 0.9em;">Kiwi Wiki</p>
  <h3 style="margin: 5px 0;">현재까지 <span id="visitor-count" style="color: #ffeb3b; font-size: 1.2em;">0</span>명 방문했습니다!</h3>
</div>

<script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-database-compat.js"></script>

<script>
  //
  window.onload = function() {
    //
    const firebaseConfig = {
        apiKey: "AIzaSyAPfzO08FQ9_6Ye3U8zWLHnaa_DMDuGxmQ",
        authDomain: "kiwi-wiki-3e547.firebaseapp.com",
        databaseURL: "https://kiwi-wiki-3e547-default-rtdb.asia-southeast1.firebasedatabase.app/",
        projectId: "kiwi-wiki-3e547",
        storageBucket: "kiwi-wiki-3e547.firebasestorage.app",
        messagingSenderId: "60692664828",
        appId: "1:60692664828:web:ea7edaf803ec23992e2279"
    };

    // Firebase 초기화
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database().ref('visitor_count');

    // 트랜잭션을 사용해 방문자 수 1 증가 
    db.transaction((current) => {
      return (current || 0) + 1;
    });

    // 실시간으로 데이터 변화 감지 (모든 사용자 화면에 즉시 반영)
    db.on('value', (snapshot) => {
      const count = snapshot.val();
      document.getElementById('visitor-count').innerText = count;
    });
  };
</script>

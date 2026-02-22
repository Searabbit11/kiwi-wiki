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

<div id="random-tip-container" class="random-tip-box">
  <h3 id="tip-title">💡 팁을 불러오는 중...</h3>
  <div id="tip-content" style="line-height: 1.6;">잠시만 기다려 주세요.</div>
</div>

<script>
  (function() {
    const tips = [
      {
        title: "💡 팁: 새로운 요소를 추가하려면?",
        content: "<code>docs/</code> 폴더 내에 새로운 <code>.md</code> 파일을 만들고 <code>mkdocs.yml</code>의 <code>nav</code> 섹션에 경로를 추가하세요. 나무위키 스타일의 인포박스 틀을 복사해서 쓰면 더 깔끔합니다!"
      },
      {
        title: "💡 팁: 키위색 글자를 클릭해봐요!",
        content: "본문의 <b>키위색 글자</b>는 관련 문서나 외부 사이트로 연결된 하이퍼링크입니다. 궁금한 용어는 주저 말고 클릭해 보세요!"
      },
      {
        title: "💡 팁: VATS 활용하기 (AlloutFPS)",
        content: "전투 중 <code>V</code>키를 눌러 <b>V.A.T.S.</b>를 활성화하세요. 적과의 거리와 엄폐 여부를 계산해 최적의 사격 각도를 제공합니다."
      },
      {
        title: "💡 팁: 스마트폰 인벤토리",
        content: "<code>TAB</code>키를 누르면 생존에 필요한 모든 기능을 담은 <b>통합 스마트폰</b>이 열립니다. 퀘스트, 지도, 인벤토리를 한눈에 확인하세요."
      },
      {
        title: "💡 팁: 1인칭/3인칭 시점 전환",
        content: "프로젝트는 1인칭과 3인칭을 모두 지원합니다. <code>LeftAlt</code>를 눌러 카메라를 회전시키면 주변 상황을 더 넓게 파악할 수 있습니다."
      },
      {
        title: "💡 팁: 생체 연성 (RE-GENESIS)",
        content: "RE-GENESIS에서는 단순한 기계가 아닌 <b>변이체의 유전자</b>를 활용한 '생체 기계'를 연성하여 오염된 땅을 정화해야 합니다."
      },
      {
        title: "💡 팁: 문서 검색 활용",
        content: "상단의 검색창(<code>Ctrl+F</code> 또는 아이콘 클릭)을 사용하면 원하는 게임이나 기술 정보를 즉시 찾을 수 있습니다."
      }
    ];

    function showRandomTip() {
      const randomIndex = Math.floor(Math.random() * tips.length);
      const tip = tips[randomIndex];
      document.getElementById('tip-title').innerHTML = tip.title;
      document.getElementById('tip-content').innerHTML = tip.content;
    }

    // 초기 실행
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showRandomTip);
    } else {
      showRandomTip();
    }
  })();
</script>

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

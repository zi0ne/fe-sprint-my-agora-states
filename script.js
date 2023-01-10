// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";
  
  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  const discussionAvatarImg = document.createElement('img');
  discussionAvatarImg.className = "discussion__avatar--image";
  discussionAvatarImg.alt = 'avatar of' + obj.author;
  discussionAvatarImg.setAttribute('src',obj.avatarUrl);
  //let imgsrc = "";
  //discussionAvatarImg.src = obj.avatarUrl ? avatarUrl : imgsrc;
  // 아바타의 이미지가 없을때 고정 이미지 사용법

  
  const discussionTitle = document.createElement('h2');
  discussionTitle.className = "discussion__title";
  
  const discussionTitleA = document.createElement('a');
  discussionTitleA.setAttribute('href',obj.url)
  discussionTitleA.textContent = obj.title;
  
  const discussionInform = document.createElement('div');
  discussionInform.className = "discussion__information";
  discussionInform.textContent = obj.author + '/' + obj.createdAt; // 템플릿리터럴로도 가능
  
  const discussionCheck = document.createElement('p');
  // 조건문으로 answer이 null인지 아닌지 확인해야함.
  discussionCheck.textContent = obj.answer ? "☑" : "☒" ;

  discussionContent.appendChild(discussionTitle);
  discussionTitle.appendChild(discussionTitleA);
  discussionContent.appendChild(discussionInform);
  avatarWrapper.appendChild(discussionAvatarImg);
  discussionAnswered.appendChild(discussionCheck);

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;

};


// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i])); // 아고라 디스커션의 0번째 배열부터 함수시작

  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);

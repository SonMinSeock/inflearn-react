import { useEffect } from 'react';

/**
 * usePageTitle 훅
 * 탭 타이틀 설정 해주는 훅
 * 인자 title 입력받아 탭의 title 설정 해주는 훅이다.
 */
export default function usePageTitle(title) {
  useEffect(() => {
    const $title = document.getElementsByTagName('title')[0];
    $title.innerText = title;
  }, [title]);
}

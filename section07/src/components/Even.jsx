import { useEffect } from 'react';

export default function Even() {
  // 3. 언마운트
  useEffect(() => {
    // 클린업, 정리함수
    return () => {
      console.log('unmount');
    };
  }, []);

  return <div>짝수입니다.</div>;
}

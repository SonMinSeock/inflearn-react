/**
 * 이모션 이미지 반환 하는 유티릴리티
 * 만든 이유는 컴포넌트마다 해당 이모지 이미지가 필요할때 임포트해서 하는게 번거롭고 코드량이 길어질수 있으므로 유틸리티 정의해서 해당 이미지 반환 하도록 제작했다.
 */
import emotion1 from '../assets/emotion1.png';
import emotion2 from '../assets/emotion2.png';
import emotion3 from '../assets/emotion3.png';
import emotion4 from '../assets/emotion4.png';
import emotion5 from '../assets/emotion5.png';

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}

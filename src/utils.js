export const recommendCloth = (temperature) => {
    if(temperature >= 28) {
        return '반팔, 반바지';
    } else if (temperature >= 23) {
        return '반팔, 면바지, 얇은 셔츠';
    } else if (temperature >= 20) {
        return '긴팔티, 면바지, 슬랙스';
    } else if (temperature >= 17) {
        return '얇은 가디건이나 니트, 맨투맨, 후드, 긴바지';
    } else if (temperature >= 12) {
        return '자켓, 가디건, 청자켓, 니트, 청바지';
    } else if (temperature >= 9) {
        return '트렌치코트, 야상, 점퍼, 스타킹, 기모바지';
    } else if (temperature >= 5) {
        return '울 코트 ,히트텍, 가죽 자켓';
    } else if (temperature < 4) {
        return '패딩, 두꺼운 코트';
    }
}

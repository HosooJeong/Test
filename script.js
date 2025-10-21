// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지가 로드되었습니다!');

    // 네비게이션 링크 클릭 시 스무스 스크롤
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 섹션에 애니메이션 효과 추가
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

    // 간단한 인터랙션 예제: 클릭 이벤트
    const heading = document.querySelector('header h1');
    if (heading) {
        heading.addEventListener('click', function() {
            this.style.color = this.style.color === 'rgb(52, 152, 219)' ? 'white' : '#3498db';
        });
    }
});


let nav = document.getElementById('nav');
let defaultpos = 0;

window.addEventListener('scroll', () => 
    {
        let st = window.pageYOffset || document.documentElement.scrollTop;

        if(st > defaultpos && st > 100) 
            {
                nav.classList.add('up')
            }
        else
            {
                nav.classList.remove('up')
            }
            
            defaultpos = st;
    }

)
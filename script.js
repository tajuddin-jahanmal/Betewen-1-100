
const spans = document.querySelectorAll('.secondSpan');
const paragraphs = document.querySelectorAll('p');
const input = document.querySelector('input');
let number = 0;

input.addEventListener('keyup', (event) =>
{
    number = event.target.value;

    if (event.target.value > 100)
    {
        input.value = 100;
    }

});

for (const span of spans)
{
    const rendomNumber = Math.floor(Math.random() * 100)
    span.textContent = rendomNumber;
}

for (const paragraph of paragraphs)
{
    paragraph.addEventListener('click', (event) =>
    {
        if (number <= 0)
            return alert("Please Enter the number!");

        event.target.style.backgroundColor = 'transparent';
        event.target.style.transition = 'all 200ms';

        let value = event.target.parentElement.children[0].textContent;

        if (value === number)
        {
            event.target.style.backgroundColor = 'transparent';
            event.target.style.transition = 'all 200ms';

            setTimeout(() =>
            {
                let alt = alert('Game Over!');
                
                if (alt === undefined)
                    window.location.reload();
            }, 300);

        }
    });
}
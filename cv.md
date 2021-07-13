# Artem Kapitanov

##Personal information
- Name: Artem Kapitanov
- Phone number: +7 (904) 037-09-68
- Marital status: Married
- Date of birth: 25 December 1988
- Nationality: Russian
- Email: avkapitanov@yandex.ru

###Full-stack web developer. Current job stack:
- Frontend: ES6+, React/Redux.
- Backend: PHP.
- Layout: html, CSS/Sass/SCSS, BEM.
- Miscellaneous: Node, npm, webpack, gulp, babel, ESlint, Git.
- CMS: Bitrix, Drupal, Joomla

##Education
### Murom Institute (affiliate) of Vladimir State University (2006-2011)
Engineer

##Personal qualities
- Dependable
- Result oriented
- Motivated
- Stress-proof
  
## Code example
```
const getSumOfMarks = (diary) => Object.values(diary).reduce((acc, mark) => acc + mark, 0);
const son = ['first', 'second', 'third'];

function whoseBicycle(diary1, diary2, diary3) {
  const marks = [diary1, diary2, diary3].map((diary) => getSumOfMarks(diary));
  const maxMark = Math.max(...marks);
  const pos = marks.lastIndexOf(maxMark);
  
  return `I need to buy a bicycle for my ${son[pos]} son.`;
}
```

##Work experience
### LLC "Beehive" (11.2012 - present)
- Development, support and modification websites and web applications;
- Refactoring and debugging;
- API integration with third-party services;

### The Education Department of Murom District (06.2011 - 11.2012)
- System Administrator
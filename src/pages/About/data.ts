
export interface IListData {
   id: number,
   name: string,
   rating: number
}

const listData:IListData[] = [
   { id: 0, name: 'HTML', rating: 100},
   { id: 1, name: 'CSS', rating: 100},
   { id: 2, name: 'SCSS', rating: 90},
   { id: 3, name: 'Responsive', rating: 100},
   { id: 4, name: 'JavaScript', rating: 90},
   { id: 5, name: 'TypeScript', rating: 80},
   { id: 6, name: 'React', rating: 95},
   { id: 7, name: 'Redux-toolkit', rating: 90},
   { id: 8, name: 'RestApi', rating: 90},
   { id: 9, name: 'Framer Motion', rating: 75},
   { id: 10, name: 'Gsap', rating: 75},
   { id: 11, name: 'Communicative', rating: 100},
   { id: 12, name: 'Team-oriented', rating: 100},
   { id: 13, name: 'Git', rating: 90},
   { id: 14, name: 'Jira', rating: 80},
   { id: 15, name: 'Express.js', rating: 75},
   { id: 16, name: 'Postman', rating: 85},
   { id: 17, name: 'MongoDB', rating: 85},
   { id: 18, name: 'Firebase', rating: 70},
   { id: 19, name: 'Mentoring', rating: 100},
   { id: 20, name: 'Public speaking', rating: 90},
   { id: 21, name: 'React Native', rating: 75},
   { id: 22, name: 'UI/UX design', rating: 75},
   { id: 23, name: 'Figma', rating: 80},
   { id: 24, name: 'Python', rating: 70},
   { id: 25, name: 'Django', rating: 60},
]



export interface IFilterData {
   id: number,
   title: string,
   list: number[]
}


const allFolter = [];
for(let i = 0; i < listData.length; i++) {
   allFolter.push(i);
}

const filterData:IFilterData[] = [
   { id: 0, title: 'all', list: allFolter },
   { id: 1, title: 'web', list: [0, 1, 2, 3, 4, 5, 10] },
   { id: 2, title: 'react', list: [4, 5, 6, 7, 8, 9, 10] },
   { id: 3, title: 'back-end', list: [15, 16, 17, 18] },
   { id: 4, title: 'social', list: [11, 12, 13, 14, 19, 20] },
   { id: 5, title: 'design', list: [22, 23] },
   { id: 6, title: 'more', list: [21, 24, 25] },
]


export { listData, filterData }

export interface IListData {
   id: number,
   name: string,
}

const listData:IListData[] = [
   { id: 0, name: 'HTML' },
   { id: 1, name: 'CSS' },
   { id: 2, name: 'SCSS' },
   { id: 3, name: 'Responsive' },
   { id: 4, name: 'JavaScript' },
   { id: 5, name: 'TypeScript' },
   { id: 6, name: 'React' },
   { id: 7, name: 'Redux-toolkit' },
   { id: 8, name: 'RestApi' },
   { id: 9, name: 'Framer Motion' },
   { id: 10, name: 'Gsap' },
   { id: 11, name: 'Communicative' },
   { id: 12, name: 'Team-oriented' },
   { id: 13, name: 'Git' },
   { id: 14, name: 'Jira' },
   { id: 15, name: 'Express.js' },
   { id: 16, name: 'Postman' },
   { id: 17, name: 'MongoDB' },
   { id: 18, name: 'Firebase' },
   { id: 19, name: 'Mentoring' },
   { id: 20, name: 'Public speaking' },
   { id: 21, name: 'React Native' },
   { id: 22, name: 'UI/UX design' },
   { id: 23, name: 'Figma' },
   { id: 24, name: 'Python' },
   { id: 25, name: 'Django' },
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
   { id: 6, title: 'more', list: [24, 25] },
]


export { listData, filterData }
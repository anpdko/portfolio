
export interface IListData {
   id: number,
   name: string,
   rating: number
}

const listData:IListData[] = [
   { id: 0, name: 'JavaScript', rating: 100},
   { id: 1, name: 'HTML', rating: 100},
   { id: 2, name: 'CSS', rating: 100},
   { id: 3, name: 'SCSS', rating: 100},
   { id: 4, name: 'Responsive', rating: 100},
   { id: 5, name: 'TypeScript', rating: 90},
   { id: 6, name: 'React', rating: 100},
   { id: 7, name: 'Redux-toolkit', rating: 90},
   { id: 8, name: 'Vue.js', rating: 75},
   { id: 9, name: 'RestApi', rating: 90},
   { id: 10, name: 'Framer Motion', rating: 70},
   { id: 11, name: 'Gsap', rating: 75},
   { id: 12, name: 'Three.js', rating: 75},
   { id: 13, name: 'Communicative', rating: 100},
   { id: 14, name: 'Team-oriented', rating: 100},
   { id: 15, name: 'OOP', rating: 90},
   { id: 16, name: 'Git', rating: 90},
   { id: 17, name: 'Express.js', rating: 75},
   { id: 18, name: 'Postman', rating: 80},
   { id: 19, name: 'MongoDB', rating: 75},
   { id: 20, name: 'Firebase', rating: 70},
   { id: 21, name: 'Mentoring', rating: 100},
   { id: 22, name: 'Public speaking', rating: 90},
   { id: 23, name: 'React Native', rating: 75},
   { id: 24, name: 'UI/UX design', rating: 80},
   { id: 25, name: 'Figma', rating: 85},
   { id: 26, name: 'Python', rating: 70},
   { id: 27, name: 'Django', rating: 60},
]



export interface IFilterData {
   id: number,
   title: string,
   list: number[]
}

const allListData = []
for (let i = 0; i < listData.length; i++){
   allListData.push(i)
}

const filterData:IFilterData[] = [
   { id: 0, title: 'all', list: allListData },
   { id: 1, title: 'front-end', list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
   { id: 2, title: 'back-end', list: [15, 16, 17, 18] },
   { id: 3, title: 'social', list: [11, 12, 13, 14, 19, 20] },
   { id: 4, title: 'design', list: [22, 23] },
   { id: 5, title: 'more', list: [21, 24, 25] }
]


export { listData, filterData }
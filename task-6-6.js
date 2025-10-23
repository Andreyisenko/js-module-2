class Course {
  constructor(obj) {
    this.title = obj.title;
    this.teacher = obj.teacher;
    this.students = obj.students;
    this.ratings = obj.ratings;
    this.isActive = obj.isActive;
  }

  getInfo() {
    return `Курс: ${this.title}, Викладач: ${
      this.teacher
    }, Кількість студентів: ${this.students.length}, Активний: ${
      this.isActive ? 'Yes' : 'No'
    }`;
  }
  addStudent(name) {
    this.students.push(name);
  }
  addRating(rating) {
    this.ratings.push(rating);
  }
  averageRating() {
    if (this.ratings.length === 0) {
      return `Немає оцінок`;
    }
    const sumReting = this.ratings.reduce((acc, elem) => acc + elem, 0);
    return (sumReting / this.ratings.length).toFixed(1);
  }
  toggleActive() {
    this.isActive = !this.isActive;
  }
}

class OnlineSchool {
  constructor(obj) {
    this.name = obj.name;
    this.courses = obj.courses;
  }
  addCourse(course) {
    this.courses.push(course);
  }
  findCourseByTitle(title) {
    const findCourse = this.courses.find(
      elem => elem.title.toLowerCase() === title.toLowerCase()
    );
    if (findCourse === undefined) {
      return `Такого курсу немає`;
    }
    return findCourse;
  }
  listActiveCourses() {
    return this.courses.filter(elem => elem.isActive);
  }
  topRatedCourse() {
    const reting = this.courses.reduce((acc, elem) =>
      acc.rating > +elem.averageRating() ? acc : elem
    );
    return reting;
  }
  overallAverageRating() {
    const retCurs = this.courses.reduce(
      (acc, elem) => (acc += +elem.averageRating()),
      0
    );
    return (retCurs / this.courses.length).toFixed(1);
  }
}

const course1 = new Course({
  title: 'JS',
  teacher: 'Viktor Petrovich',
  students: ['Andrey', 'Stas', 'Yana', 'Bob'],
  ratings: [4, 5, 7, 8, 6],
  isActive: true,
});

const course2 = new Course({
  title: 'HTML',
  teacher: 'Irina Viktorovna',
  students: ['Joy', 'Didi', 'Sem', 'Ted'],
  ratings: [22, 3, 4, 6],
  isActive: false,
});

const course3 = new Course({
  title: 'Node',
  teacher: 'Kler Fotry',
  students: ['Eva', 'Zak', 'Silvia'],
  ratings: [4, 12, 6, 7],
  isActive: true,
});

const bestSchool = new OnlineSchool({
  name: '1-bestSchool',
  courses: [course1, course2, course3],
});
// console.log(course1.getInfo());
// console.log(course2);
// console.log(course3);
// course3.addStudent('Taras');
// console.log(course3);
// console.log(course1);
// course1.addRating(66);
// console.log(course1);
// console.log(course1.isActive);
// course1.toggleActive();
// console.log(course1.isActive);

// console.log(bestSchool);
// console.log(bestSchool);

bestSchool.addCourse(
  new Course({
    title: 'React',
    teacher: 'Ditrich Rot',
    students: ['Fridrich', 'Zozo', 'Sisi'],
    ratings: [1, 1, 1, 1, 1],
    isActive: false,
  })
);
// console.log(course3.averageRating());

// console.log(bestSchool);
// console.log(bestSchool.findCourseByTitle('J'));
// console.log(...bestSchool.listActiveCourses());
// console.log(bestSchool.topRatedCourse());
// console.log(bestSchool.courses.map(elem => elem.averageRating()));
// console.log(bestSchool.courses.map(elem => elem));
// console.log(bestSchool.overallAverageRating());
// console.log(bestSchool);

enum CourseType {
    FREE,
    PREMIUM,
    PRIVATE,
    HIDDEN
}
const course = {
    title: 'Typescript',
    type: CourseType.PREMIUM
};

console.log('course', course);
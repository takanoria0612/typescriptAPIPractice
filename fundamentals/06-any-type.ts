let lessonsCount: any = 5;
lessonsCount = 'five'; // No error

let wow: any[] = ["hello", 2, 3];
wow = ["world", 4, 5]; // No error

function printCourse(title, lessonsCount) {
  return `Course ${title} has ${lessonsCount} lessons.`;
}// No error

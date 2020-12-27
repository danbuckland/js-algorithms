class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year
    this.absences = 0
    this.scores = []
  }
  
  fullName() {
    return `Student's full name is ${this.firstName} ${this.lastName}`
  }

  markLate() {
    this.absences += 1
    if (this.absences >= 3) {
      return `${this.firstName} ${this.lastName} has been expelled for tardiness!`
    }
    return `${this.firstName} ${this.lastName} has been late ${this.absences} times`
  }

  addScore(score) {
    this.scores.push(score)
    return this.scores
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {return a + b})
    return Math.round(sum/this.scores.length)
  }

  static enrollStudents() {
    return "Enrolling this year's students"
  }
}


let dan = new Student("Dan", "Buckland", 13)
dan.addScore(36, 50)
console.log(dan.calculateAverage())
dan.addScore(82)
console.log(dan.calculateAverage())
console.log(dan.fullName())
console.log(dan.markLate())
console.log(dan.markLate())
console.log(dan.markLate())

console.log(Student.enrollStudents())
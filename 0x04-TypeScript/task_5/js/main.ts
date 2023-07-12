interface MajorCredits {
  credits: number;
  majorCred: number;
}

interface MinorCredits {
  credits: number;
  minorCred: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MinorCredits): number {
  const sum = subject2.credits + subject2.credits;
  return subject1.credits;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  const sum = subject2.credits + subject2.credits;
  return subject2.credits;
}
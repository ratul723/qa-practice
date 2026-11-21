export const ADMIN = { username: 'Admin', password: 'admin123' };

export function randomString(length = 6): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

export function randomEmployee() {
  return {
    ffirstName: `Test${randomString(5)}`,
    lastName: `User${randomString(5)}`,
  };
}

export function randomUsername(): string {
  return `qa_${randomString(8)}`;
}

export const TEST_PASSWORD = 'QaTest@12345';

// Returns a random future weekday as yyyy-mm-dd (avoids weekends and overlapping old leaves)
export function randomFutureWeekday(minDays = 30, maxDays = 300): string {
  const d = new Date();
  d.setDate(d.getDate() + minDays + Math.floor(Math.random() * (maxDays - minDays + 1)));
  while (d.getDay() === 0 || d.getDay() === 6) {
    d.setDate(d.getDate() + 1);
  }
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`;
}
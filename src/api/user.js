function delay(duration) {
  // 模拟网络延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export async function login(loginId, loginPsw) {
  await delay(1000);
  if (loginId === 'admin' && loginPsw === '123123') {
    const user = {
      loginId,
      name: '管理员',
    };
    localStorage.setItem('USER', JSON.stringify(user));
    return user;
  }
  return null;
}

export async function loginOut() {
  await delay(1000);
  localStorage.removeItem('USER');
}
export async function whoAnI() {
  await delay(1000);
  const user = localStorage.getItem('USER');
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

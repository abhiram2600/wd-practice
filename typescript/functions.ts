function add(num) {
  return num + 2;
}

add(4);

function signup(name: string, email: string): boolean {
  if (name && email) {
    return false;
  }
  return true;
}

let st: boolean;
st = signup("a", "b");

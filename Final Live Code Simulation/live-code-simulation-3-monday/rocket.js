/*
----------------------------
ROCKET - Operation Evaluator
----------------------------
PROBLEM
=======
Proses nested object di bawah ini menjadi operasi matematika dan hitung hasil akhirnya!
diberikan operator +, -, *, dan /. Abaikan pembulatan dan biarkan angka koma tetap ada.

WAJIB menggunakan metode rekursif!

*/

function operationEvaluator(operation) {
  if (JSON.stringify(operation.left) == operation.left && JSON.stringify(operation.right) != operation.right) {
    if (operation.op === '+') {
      return operation.left + operationEvaluator(operation.right);
    } else if (operation.op === '-') {
      return operation.left - operationEvaluator(operation.right);
    } if (operation.op === '*') {
      return operation.left * operationEvaluator(operation.right);
    } if (operation.op === '/') {
      return operation.left / operationEvaluator(operation.right);
    }
  } else if (JSON.stringify(operation.right) == operation.right && JSON.stringify(operation.left) != operation.left) {
    if (operation.op === '+') {
      return operation.right + operationEvaluator(operation.left);
    } else if (operation.op === '-') {
      return operation.right - operationEvaluator(operation.left);
    } if (operation.op === '*') {
      return operation.right * operationEvaluator(operation.left);
    } if (operation.op === '/') {
      return operation.right / operationEvaluator(operation.left);
    }
  } else if (JSON.stringify(operation.left) != operation.left && JSON.stringify(operation.right) != operation.right) {
    if (operation.op === '+') {
      return operationEvaluator(operation.left) + operationEvaluator(operation.right);
    } else if (operation.op === '-') {
      return operationEvaluator(operation.left) - operationEvaluator(operation.right);
    } if (operation.op === '*') {
      return operationEvaluator(operation.left) * operationEvaluator(operation.right);
    } if (operation.op === '/') {
      return operationEvaluator(operation.left) / operationEvaluator(operation.right);
    }
  } else if (JSON.stringify(operation.left) == operation.left && JSON.stringify(operation.right) == operation.right) {
    if (operation.op === '+') {
      return operation.left + operation.right;
    } else if (operation.op === '-') {
      return operation.left - operation.right;
    } if (operation.op === '*') {
      return operation.left * operation.right;
    } if (operation.op === '/') {
      return operation.left / operation.right;
    }
  }
}

// // CARA DARI TADEUS
// function operationEvaluator(operation) {
//   if (operation.op == undefined || isNaN(operation.op) === true) { return operation;} // base-case; or end of getting deeper
//   if (operation.op === '+'){ return operationEvaluator(operation.left) + operationEvaluator(operation.right)}
//   if (operation.op === '-'){ return operationEvaluator(operation.left) - operationEvaluator(operation.right)}
//   if (operation.op === '*'){ return operationEvaluator(operation.left) * operationEvaluator(operation.right)}
//   if (operation.op === '/'){ return operationEvaluator(operation.left) / operationEvaluator(operation.right)}
// }

var op1 = {
  left: 5,
  op: '-',
  right: {
    left: 3,
    op: '*',
    right: {
      left: 8,
      op: '-',
      right: {
        left: 200,
        op: '/',
        right: 5,
      }
    }
  }
};

// proses: 5 - (3 * (8 - (200 / 5)))
console.log(operationEvaluator(op1)); // 101

var op2 = {
  left: {
    left: 10,
    op: '*',
    right: {
      left: 2,
      op: '+',
      right: 1,
    },
  },
  op: '+',
  right: {
    left: 5,
    op: '*',
    right: {
      left: 1,
      op: '-',
      right: {
        left: 1,
        op: '+',
        right: 2,
      }
    }
  }
};

// proses: ((10 * (2 + 1)) + (5 * (1 - (1 + 2)))
console.log(operationEvaluator(op2)); // 20

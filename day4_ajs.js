function decode(message) {
  let init, end;
  while (init !== -1 && end !== -1) {
    init = message.lastIndexOf("(");
    end = message.indexOf(')', init);
    const msg = message.substring(init, end + 1);
    const decoded = msg.split("").slice(1, -1).reverse().join("");
    message = message.replace(msg, decoded);
  }
  return message;
}

let a = 'sa(u(cla)atn)s';
console.log(decode(a));

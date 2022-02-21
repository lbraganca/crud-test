function getValue(field) {
  return (
    this.params?.[field] ||
    this.body?.[field] ||
    this.query?.[field] ||
    (this.header && this.header(field)) ||
    null
  );
}

export default function middleware(request, response, next) {
  request.getValue = getValue;
  next();
}

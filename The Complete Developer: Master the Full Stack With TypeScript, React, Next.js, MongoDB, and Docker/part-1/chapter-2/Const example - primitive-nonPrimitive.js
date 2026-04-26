const primitiveDataType = 1;
try {
  primitiveDataType = 2; // this should fail; prim data type
} catch (err) {
  console.log(err);
}

const nonPrimitiveDataType = [];
nonPrimitiveDataType.push(1); // this should not fail; non-prim data type

console.log(nonPrimitiveDataType);

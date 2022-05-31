class ValueHolder<ValueType> {
  value: ValueType;
}

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

valueWrapper<number>(10);
valueWrapper<string>("Cheese");
valueWrapper<boolean>(false);

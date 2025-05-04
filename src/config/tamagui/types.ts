export type GetStyledVariants<A> = A extends {
  __tama: [any, any, any, any, infer B, any];
}
  ? B
  : {};

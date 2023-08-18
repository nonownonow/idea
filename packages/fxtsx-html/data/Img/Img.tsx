import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { Fxtsx } from "fxtsx/FxTsx/FxTsx";

export type ImgProps = ComponentPropsWithoutRef<"img"> & {
  $pcOption: Record<string, string>;
  $mobileOption: Record<string, string>;
  $minPcWidth: number;
};
// export type ImgProps =
/**
 * The Picture Element
 * - [HTMLPicture](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement) 을 상속 받았기 때문에, 해당 속성을 모두 이용할 수 있음
 * */
export const Img = Fxtsx<HTMLImageElement, ImgProps>(function Img(
  rootProps,
  restProps,
  ref
) {
  const { $pcOption, $mobileOption, $minPcWidth, alt, ...imgProps } = restProps;
  return (
    <picture data-fx-img {...rootProps}>
      <source
        srcSet={getImgOptions($pcOption)}
        media={`(min-width: ${$minPcWidth}px)`}
      />
      <source srcSet={getImgOptions($mobileOption)} />
      <img src={$mobileOption["1x"]} alt={alt} {...imgProps} ref={ref} />
    </picture>
  );
});

function getImgOptions(option: Record<string, string>) {
  return Object.entries(option)
    .map(([k, v]) => `${v} ${k}`)
    .join(", ");
}

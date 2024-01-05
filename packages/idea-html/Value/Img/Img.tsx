import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { Fxtsx } from "packages/idea/FxTsx/FxTsx";
import { VALUE } from "packages/idea/VALUE/VALUE";

export type ImgProps = ComponentPropsWithoutRef<"img"> & Img;
export type Img = {
  $pcOption: Record<string, string>;
  $mobileOption: Record<string, string>;
  $minPcWidth: number;
} & VALUE;
// export type ImgProps =
/**
 * The Picture Element
 * - [HTMLPicture](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement) 을 상속 받았기 때문에, 해당 속성을 모두 이용할 수 있음
 * */
export const Img = Fxtsx<HTMLImageElement, ImgProps>(
  (
    rootProps,
    {
      $data,
      $valueLabel = $data,
      $pcOption,
      $mobileOption,
      $minPcWidth,
      alt,
      ...restProps
    },
    ref
  ) => (
    <VALUE
      data-fx-img
      Root={"picture"}
      {...rootProps}
      $data={$data}
      $valueLabel={
        <>
          <source
            srcSet={getImgOptions($pcOption)}
            media={`(min-width: ${$minPcWidth}px)`}
          />
          <source srcSet={getImgOptions($mobileOption)} />
          <img src={$mobileOption["1x"]} alt={alt} {...restProps} ref={ref} />
        </>
      }
    />
  )
);

function getImgOptions(option: Record<string, string>) {
  return Object.entries(option)
    .map(([k, v]) => `${v} ${k}`)
    .join(", ");
}

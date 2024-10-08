// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wjafXWEvDytFogT7SiMy2v
// Component: 3tcwCShdS0g0

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsjEqVmdAbnKYc } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: jEqVmdAbnKYc/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_inlab.module.css"; // plasmic-import: wjafXWEvDytFogT7SiMy2v/projectcss
import sty from "./PlasmicNewFeatureBanner.module.css"; // plasmic-import: 3tcwCShdS0g0/css

createPlasmicElementProxy;

export type PlasmicNewFeatureBanner__VariantMembers = {};
export type PlasmicNewFeatureBanner__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewFeatureBanner__VariantsArgs;
export const PlasmicNewFeatureBanner__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNewFeatureBanner__ArgsType = {
  newVersionDatetime2?: string;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicNewFeatureBanner__ArgsType;
export const PlasmicNewFeatureBanner__ArgProps = new Array<ArgPropType>(
  "newVersionDatetime2",
  "children"
);

export type PlasmicNewFeatureBanner__OverridesType = {
  newFeatureBanner?: Flex__<"div">;
  newVersionDatetime?: Flex__<"div">;
  featureDescription?: Flex__<"div">;
};

export interface DefaultNewFeatureBannerProps {
  newVersionDatetime2?: string;
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewFeatureBanner__RenderFunc(props: {
  variants: PlasmicNewFeatureBanner__VariantsArgs;
  args: PlasmicNewFeatureBanner__ArgsType;
  overrides: PlasmicNewFeatureBanner__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjEqVmdAbnKYc()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"newFeatureBanner"}
      data-plasmic-override={overrides.newFeatureBanner}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.newFeatureBanner
      )}
    >
      <div
        data-plasmic-name={"newVersionDatetime"}
        data-plasmic-override={overrides.newVersionDatetime}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.newVersionDatetime
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.newVersionDatetime2;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <div
        data-plasmic-name={"featureDescription"}
        data-plasmic-override={overrides.featureDescription}
        className={classNames(projectcss.all, sty.featureDescription)}
      >
        {renderPlasmicSlot({
          defaultContents:
            '\u0628\u0647\u0628\u0648\u062f \u0631\u0627\u0628\u0637 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0641\u0644\u0627\u0646\n\u0628\u0647\u0628\u0648\u062f \u06a9\u0627\u0631\u0628\u0631\u06cc \u0641\u0644\u0627\u0646\n\u0645\u0634\u0627\u0647\u062f\u0647 \u0644\u06cc\u0633\u062a \u0628\u062e\u0634 \u0628\u06cc\u0645\u0627\u0631\u0627\u0646 : \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u06cc\u0645\u0627\u0631\u0627\u0646 \u0647\u0631 \u0628\u062e\u0634 \u0631\u0627 \u0628\u0627 \u0632\u062f\u0646 \u0631\u0648\u06cc \u062a\u0628 "\u0628\u062e\u0634" \u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f.',
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  newFeatureBanner: [
    "newFeatureBanner",
    "newVersionDatetime",
    "featureDescription"
  ],
  newVersionDatetime: ["newVersionDatetime"],
  featureDescription: ["featureDescription"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  newFeatureBanner: "div";
  newVersionDatetime: "div";
  featureDescription: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewFeatureBanner__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewFeatureBanner__VariantsArgs;
    args?: PlasmicNewFeatureBanner__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewFeatureBanner__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewFeatureBanner__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNewFeatureBanner__ArgProps,
          internalVariantPropNames: PlasmicNewFeatureBanner__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewFeatureBanner__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "newFeatureBanner") {
    func.displayName = "PlasmicNewFeatureBanner";
  } else {
    func.displayName = `PlasmicNewFeatureBanner.${nodeName}`;
  }
  return func;
}

export const PlasmicNewFeatureBanner = Object.assign(
  // Top-level PlasmicNewFeatureBanner renders the root element
  makeNodeComponent("newFeatureBanner"),
  {
    // Helper components rendering sub-elements
    newVersionDatetime: makeNodeComponent("newVersionDatetime"),
    featureDescription: makeNodeComponent("featureDescription"),

    // Metadata about props expected for PlasmicNewFeatureBanner
    internalVariantProps: PlasmicNewFeatureBanner__VariantProps,
    internalArgProps: PlasmicNewFeatureBanner__ArgProps
  }
);

export default PlasmicNewFeatureBanner;
/* prettier-ignore-end */

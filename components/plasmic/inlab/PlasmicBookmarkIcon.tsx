// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wjafXWEvDytFogT7SiMy2v
// Component: PK_hwsu90gKT

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
import sty from "./PlasmicBookmarkIcon.module.css"; // plasmic-import: PK_hwsu90gKT/css

import BookmarkPlusSvgrepoComsvgIcon from "./icons/PlasmicIcon__BookmarkPlusSvgrepoComsvg"; // plasmic-import: laC4EyEnFr3s/icon
import BookmarkDashFillSvgrepoComsvgIcon from "./icons/PlasmicIcon__BookmarkDashFillSvgrepoComsvg"; // plasmic-import: OXlS9uB7Ffdy/icon
import LoadingLoaderSvgrepoComsvgIcon from "./icons/PlasmicIcon__LoadingLoaderSvgrepoComsvg"; // plasmic-import: FYp_b7bC4SRG/icon

createPlasmicElementProxy;

export type PlasmicBookmarkIcon__VariantMembers = {
  bookmarked: "bookmarked";
  loadingBookmark: "loadingBookmark";
};
export type PlasmicBookmarkIcon__VariantsArgs = {
  bookmarked?: SingleBooleanChoiceArg<"bookmarked">;
  loadingBookmark?: SingleBooleanChoiceArg<"loadingBookmark">;
};
type VariantPropType = keyof PlasmicBookmarkIcon__VariantsArgs;
export const PlasmicBookmarkIcon__VariantProps = new Array<VariantPropType>(
  "bookmarked",
  "loadingBookmark"
);

export type PlasmicBookmarkIcon__ArgsType = {
  selected?: boolean;
  onSelectedChange?: (val: string) => void;
  patientId?: number;
  trigerReload?: () => void;
};
type ArgPropType = keyof PlasmicBookmarkIcon__ArgsType;
export const PlasmicBookmarkIcon__ArgProps = new Array<ArgPropType>(
  "selected",
  "onSelectedChange",
  "patientId",
  "trigerReload"
);

export type PlasmicBookmarkIcon__OverridesType = {
  bookmark?: Flex__<"svg">;
};

export interface DefaultBookmarkIconProps {
  selected?: boolean;
  onSelectedChange?: (val: string) => void;
  patientId?: number;
  trigerReload?: () => void;
  bookmarked?: SingleBooleanChoiceArg<"bookmarked">;
  loadingBookmark?: SingleBooleanChoiceArg<"loadingBookmark">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBookmarkIcon__RenderFunc(props: {
  variants: PlasmicBookmarkIcon__VariantsArgs;
  args: PlasmicBookmarkIcon__ArgsType;
  overrides: PlasmicBookmarkIcon__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "bookmarked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.selected === true;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.bookmarked
      },
      {
        path: "selected",
        type: "writable",
        variableType: "boolean",

        valueProp: "selected",
        onChangeProp: "onSelectedChange"
      },
      {
        path: "loadingBookmark",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.loadingBookmark
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjEqVmdAbnKYc()
  });

  return (
    <PlasmicIcon__
      data-plasmic-name={"bookmark"}
      data-plasmic-override={overrides.bookmark}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      PlasmicIconType={
        hasVariant($state, "loadingBookmark", "loadingBookmark")
          ? LoadingLoaderSvgrepoComsvgIcon
          : hasVariant($state, "bookmarked", "bookmarked")
          ? BookmarkDashFillSvgrepoComsvgIcon
          : BookmarkPlusSvgrepoComsvgIcon
      }
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.bookmark,
        {
          [sty.bookmarkbookmarked]: hasVariant(
            $state,
            "bookmarked",
            "bookmarked"
          ),
          [sty.bookmarkloadingBookmark]: hasVariant(
            $state,
            "loadingBookmark",
            "loadingBookmark"
          )
        }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["activateLoadingBookmarkVariant"] = true
          ? (() => {
              const actionArgs = { vgroup: "loadingBookmark", operation: 4 };
              return (({ vgroup, value }) => {
                if (typeof value === "string") {
                  value = [value];
                }

                $stateSet($state, vgroup, true);
                return true;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["activateLoadingBookmarkVariant"] != null &&
          typeof $steps["activateLoadingBookmarkVariant"] === "object" &&
          typeof $steps["activateLoadingBookmarkVariant"].then === "function"
        ) {
          $steps["activateLoadingBookmarkVariant"] = await $steps[
            "activateLoadingBookmarkVariant"
          ];
        }

        $steps["toggleBookmark"] = true
          ? (() => {
              const actionArgs = {
                args: [
                  "PATCH",
                  `/n8n/webhook/bookmark_patientcard?patient_id=${
                    $props.patientId
                  }&namespace_id=${localStorage.getItem(
                    "inlab_user_namespace_id"
                  )}&bookmark=${!$state.selected}`
                ]
              };
              return $globalActions["AuthGlobalContext.apiFetcher"]?.apply(
                null,
                [...actionArgs.args]
              );
            })()
          : undefined;
        if (
          $steps["toggleBookmark"] != null &&
          typeof $steps["toggleBookmark"] === "object" &&
          typeof $steps["toggleBookmark"].then === "function"
        ) {
          $steps["toggleBookmark"] = await $steps["toggleBookmark"];
        }

        $steps["runTrigerReload"] =
          $steps.toggleBookmark.status === 200
            ? (() => {
                const actionArgs = { eventRef: $props["trigerReload"] };
                return (({ eventRef, args }) => {
                  return eventRef?.(...(args ?? []));
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
        if (
          $steps["runTrigerReload"] != null &&
          typeof $steps["runTrigerReload"] === "object" &&
          typeof $steps["runTrigerReload"].then === "function"
        ) {
          $steps["runTrigerReload"] = await $steps["runTrigerReload"];
        }

        $steps["deactivateLoadingBookmarkVariant"] =
          $steps.toggleBookmark.status === 200
            ? (() => {
                const actionArgs = { vgroup: "loadingBookmark", operation: 6 };
                return (({ vgroup, value }) => {
                  if (typeof value === "string") {
                    value = [value];
                  }

                  $stateSet($state, vgroup, false);
                  return false;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
        if (
          $steps["deactivateLoadingBookmarkVariant"] != null &&
          typeof $steps["deactivateLoadingBookmarkVariant"] === "object" &&
          typeof $steps["deactivateLoadingBookmarkVariant"].then === "function"
        ) {
          $steps["deactivateLoadingBookmarkVariant"] = await $steps[
            "deactivateLoadingBookmarkVariant"
          ];
        }
      }}
      role={"img"}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  bookmark: ["bookmark"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  bookmark: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBookmarkIcon__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBookmarkIcon__VariantsArgs;
    args?: PlasmicBookmarkIcon__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBookmarkIcon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBookmarkIcon__ArgsType,
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
          internalArgPropNames: PlasmicBookmarkIcon__ArgProps,
          internalVariantPropNames: PlasmicBookmarkIcon__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBookmarkIcon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "bookmark") {
    func.displayName = "PlasmicBookmarkIcon";
  } else {
    func.displayName = `PlasmicBookmarkIcon.${nodeName}`;
  }
  return func;
}

export const PlasmicBookmarkIcon = Object.assign(
  // Top-level PlasmicBookmarkIcon renders the root element
  makeNodeComponent("bookmark"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBookmarkIcon
    internalVariantProps: PlasmicBookmarkIcon__VariantProps,
    internalArgProps: PlasmicBookmarkIcon__ArgProps
  }
);

export default PlasmicBookmarkIcon;
/* prettier-ignore-end */
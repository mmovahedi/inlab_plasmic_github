// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wjafXWEvDytFogT7SiMy2v
// Component: RABqkXkLRlle

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
import sty from "./PlasmicAlert2.module.css"; // plasmic-import: RABqkXkLRlle/css

import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: qdjybZJw3tm3/icon

createPlasmicElementProxy;

export type PlasmicAlert2__VariantMembers = {
  noIcon: "noIcon";
  noHeader: "noHeader";
  noBody: "noBody";
  information: "information";
  informationNoDescription: "informationNoDescription";
  success: "success";
  successNoDescription: "successNoDescription";
  error: "error";
  errorNoDescription: "errorNoDescription";
  warning: "warning";
  warningNoDescription: "warningNoDescription";
};
export type PlasmicAlert2__VariantsArgs = {
  noIcon?: SingleBooleanChoiceArg<"noIcon">;
  noHeader?: SingleBooleanChoiceArg<"noHeader">;
  noBody?: SingleBooleanChoiceArg<"noBody">;
  information?: SingleBooleanChoiceArg<"information">;
  informationNoDescription?: SingleBooleanChoiceArg<"informationNoDescription">;
  success?: SingleBooleanChoiceArg<"success">;
  successNoDescription?: SingleBooleanChoiceArg<"successNoDescription">;
  error?: SingleBooleanChoiceArg<"error">;
  errorNoDescription?: SingleBooleanChoiceArg<"errorNoDescription">;
  warning?: SingleBooleanChoiceArg<"warning">;
  warningNoDescription?: SingleBooleanChoiceArg<"warningNoDescription">;
};
type VariantPropType = keyof PlasmicAlert2__VariantsArgs;
export const PlasmicAlert2__VariantProps = new Array<VariantPropType>(
  "noIcon",
  "noHeader",
  "noBody",
  "information",
  "informationNoDescription",
  "success",
  "successNoDescription",
  "error",
  "errorNoDescription",
  "warning",
  "warningNoDescription"
);

export type PlasmicAlert2__ArgsType = {
  icon?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAlert2__ArgsType;
export const PlasmicAlert2__ArgProps = new Array<ArgPropType>(
  "icon",
  "header",
  "body"
);

export type PlasmicAlert2__OverridesType = {
  root?: Flex__<"div">;
  h6?: Flex__<"h6">;
};

export interface DefaultAlert2Props {
  icon?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
  noIcon?: SingleBooleanChoiceArg<"noIcon">;
  noHeader?: SingleBooleanChoiceArg<"noHeader">;
  noBody?: SingleBooleanChoiceArg<"noBody">;
  information?: SingleBooleanChoiceArg<"information">;
  informationNoDescription?: SingleBooleanChoiceArg<"informationNoDescription">;
  success?: SingleBooleanChoiceArg<"success">;
  successNoDescription?: SingleBooleanChoiceArg<"successNoDescription">;
  error?: SingleBooleanChoiceArg<"error">;
  errorNoDescription?: SingleBooleanChoiceArg<"errorNoDescription">;
  warning?: SingleBooleanChoiceArg<"warning">;
  warningNoDescription?: SingleBooleanChoiceArg<"warningNoDescription">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAlert2__RenderFunc(props: {
  variants: PlasmicAlert2__VariantsArgs;
  args: PlasmicAlert2__ArgsType;
  overrides: PlasmicAlert2__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "noIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noIcon
      },
      {
        path: "noHeader",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noHeader
      },
      {
        path: "noBody",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noBody
      },
      {
        path: "information",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.information
      },
      {
        path: "informationNoDescription",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.informationNoDescription
      },
      {
        path: "success",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.success
      },
      {
        path: "successNoDescription",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.successNoDescription
      },
      {
        path: "error",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.error
      },
      {
        path: "errorNoDescription",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.errorNoDescription
      },
      {
        path: "warning",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.warning
      },
      {
        path: "warningNoDescription",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.warningNoDescription
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rooterrorNoDescription]: hasVariant(
            $state,
            "errorNoDescription",
            "errorNoDescription"
          ),
          [sty.rooterror]: hasVariant($state, "error", "error"),
          [sty.rootinformationNoDescription]: hasVariant(
            $state,
            "informationNoDescription",
            "informationNoDescription"
          ),
          [sty.rootinformation]: hasVariant(
            $state,
            "information",
            "information"
          ),
          [sty.rootnoBody]: hasVariant($state, "noBody", "noBody"),
          [sty.rootsuccessNoDescription]: hasVariant(
            $state,
            "successNoDescription",
            "successNoDescription"
          ),
          [sty.rootsuccess]: hasVariant($state, "success", "success"),
          [sty.rootwarningNoDescription]: hasVariant(
            $state,
            "warningNoDescription",
            "warningNoDescription"
          ),
          [sty.rootwarning]: hasVariant($state, "warning", "warning")
        }
      )}
    >
      {(() => {
        try {
          return setTimeout(() => {
            false;
          }, 10000);
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__tAFvX, {
            [sty.freeBoxerrorNoDescription__tAFvXlb0Bt]: hasVariant(
              $state,
              "errorNoDescription",
              "errorNoDescription"
            ),
            [sty.freeBoxerror__tAFvXjrU1E]: hasVariant(
              $state,
              "error",
              "error"
            ),
            [sty.freeBoxinformationNoDescription__tAFvXr1XdH]: hasVariant(
              $state,
              "informationNoDescription",
              "informationNoDescription"
            ),
            [sty.freeBoxinformation__tAFvXdJnQj]: hasVariant(
              $state,
              "information",
              "information"
            ),
            [sty.freeBoxnoBody__tAFvXziS6C]: hasVariant(
              $state,
              "noBody",
              "noBody"
            ),
            [sty.freeBoxnoHeader__tAFvXd8Phc]: hasVariant(
              $state,
              "noHeader",
              "noHeader"
            ),
            [sty.freeBoxnoIcon__tAFvX3C73O]: hasVariant(
              $state,
              "noIcon",
              "noIcon"
            ),
            [sty.freeBoxsuccessNoDescription__tAFvXcQkJw]: hasVariant(
              $state,
              "successNoDescription",
              "successNoDescription"
            ),
            [sty.freeBoxsuccess__tAFvXKz3Xm]: hasVariant(
              $state,
              "success",
              "success"
            ),
            [sty.freeBoxwarningNoDescription__tAFvXhWBaY]: hasVariant(
              $state,
              "warningNoDescription",
              "warningNoDescription"
            ),
            [sty.freeBoxwarning__tAFvXgGUyN]: hasVariant(
              $state,
              "warning",
              "warning"
            )
          })}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jwYak, {
              [sty.freeBoxerrorNoDescription__jwYaklb0Bt]: hasVariant(
                $state,
                "errorNoDescription",
                "errorNoDescription"
              ),
              [sty.freeBoxerror__jwYakjrU1E]: hasVariant(
                $state,
                "error",
                "error"
              ),
              [sty.freeBoxinformationNoDescription__jwYakr1XdH]: hasVariant(
                $state,
                "informationNoDescription",
                "informationNoDescription"
              ),
              [sty.freeBoxinformation__jwYakdJnQj]: hasVariant(
                $state,
                "information",
                "information"
              ),
              [sty.freeBoxnoHeader__jwYakD8Phc]: hasVariant(
                $state,
                "noHeader",
                "noHeader"
              ),
              [sty.freeBoxnoIcon__jwYak3C73O]: hasVariant(
                $state,
                "noIcon",
                "noIcon"
              ),
              [sty.freeBoxsuccessNoDescription__jwYakCQkJw]: hasVariant(
                $state,
                "successNoDescription",
                "successNoDescription"
              ),
              [sty.freeBoxsuccess__jwYakKz3Xm]: hasVariant(
                $state,
                "success",
                "success"
              ),
              [sty.freeBoxwarningNoDescription__jwYakhWBaY]: hasVariant(
                $state,
                "warningNoDescription",
                "warningNoDescription"
              ),
              [sty.freeBoxwarning__jwYakgGUyN]: hasVariant(
                $state,
                "warning",
                "warning"
              )
            })}
          >
            <h6
              data-plasmic-name={"h6"}
              data-plasmic-override={overrides.h6}
              className={classNames(projectcss.all, projectcss.h6, sty.h6, {
                [sty.h6noHeader]: hasVariant($state, "noHeader", "noHeader"),
                [sty.h6noIcon]: hasVariant($state, "noIcon", "noIcon")
              })}
            >
              {renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tqQa
                    )}
                  >
                    {"Heads up"}
                  </div>
                ),
                value: args.header
              })}
            </h6>
            <div
              className={classNames(projectcss.all, sty.freeBox__xPgC, {
                [sty.freeBoxerrorNoDescription__xPgCLb0Bt]: hasVariant(
                  $state,
                  "errorNoDescription",
                  "errorNoDescription"
                ),
                [sty.freeBoxerror__xPgCJrU1E]: hasVariant(
                  $state,
                  "error",
                  "error"
                ),
                [sty.freeBoxinformationNoDescription__xPgCR1XdH]: hasVariant(
                  $state,
                  "informationNoDescription",
                  "informationNoDescription"
                ),
                [sty.freeBoxinformation__xPgCDJnQj]: hasVariant(
                  $state,
                  "information",
                  "information"
                ),
                [sty.freeBoxnoBody__xPgCZiS6C]: hasVariant(
                  $state,
                  "noBody",
                  "noBody"
                ),
                [sty.freeBoxnoHeader__xPgCD8Phc]: hasVariant(
                  $state,
                  "noHeader",
                  "noHeader"
                ),
                [sty.freeBoxsuccessNoDescription__xPgCCQkJw]: hasVariant(
                  $state,
                  "successNoDescription",
                  "successNoDescription"
                ),
                [sty.freeBoxsuccess__xPgCKz3Xm]: hasVariant(
                  $state,
                  "success",
                  "success"
                ),
                [sty.freeBoxwarningNoDescription__xPgCHWBaY]: hasVariant(
                  $state,
                  "warningNoDescription",
                  "warningNoDescription"
                ),
                [sty.freeBoxwarning__xPgCGGUyN]: hasVariant(
                  $state,
                  "warning",
                  "warning"
                )
              })}
            >
              {renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2CPJn
                    )}
                  >
                    {"Here is the body text description for the alert!"}
                  </div>
                ),
                value: args.body
              })}
            </div>
          </Stack__>
          <div
            className={classNames(projectcss.all, sty.freeBox___0HdtD, {
              [sty.freeBoxnoIcon___0HdtD3C73O]: hasVariant(
                $state,
                "noIcon",
                "noIcon"
              )
            })}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <Icon6Icon
                  className={classNames(projectcss.all, sty.svg__ywfhy)}
                  role={"img"}
                />
              ),

              value: args.icon
            })}
          </div>
        </Stack__>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h6"],
  h6: ["h6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h6: "h6";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAlert2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAlert2__VariantsArgs;
    args?: PlasmicAlert2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAlert2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAlert2__ArgsType,
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
          internalArgPropNames: PlasmicAlert2__ArgProps,
          internalVariantPropNames: PlasmicAlert2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAlert2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAlert2";
  } else {
    func.displayName = `PlasmicAlert2.${nodeName}`;
  }
  return func;
}

export const PlasmicAlert2 = Object.assign(
  // Top-level PlasmicAlert2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h6: makeNodeComponent("h6"),

    // Metadata about props expected for PlasmicAlert2
    internalVariantProps: PlasmicAlert2__VariantProps,
    internalArgProps: PlasmicAlert2__ArgProps
  }
);

export default PlasmicAlert2;
/* prettier-ignore-end */
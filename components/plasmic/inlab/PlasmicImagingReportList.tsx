// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wjafXWEvDytFogT7SiMy2v
// Component: AFB-1jxjMqDb

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

import { ApiFetcherComponent } from "../../../utils/ApiFetcherComponent"; // plasmic-import: kxxsrihQ2d7W/codeComponent
import Button from "../../Button"; // plasmic-import: IoZvAstVrNqa/component
import SwitchingTab from "../../SwitchingTab"; // plasmic-import: 9Hr8d57xz9H9/component
import RedirectToLoginPage from "../../RedirectToLoginPage"; // plasmic-import: 0wFpBWYaqpsM/component
import RedirectToNamespaceSelection from "../../RedirectToNamespaceSelection"; // plasmic-import: aXAcva2etiX1/component
import OnloadUserPatientInteractionCount from "../../OnloadUserPatientInteractionCount"; // plasmic-import: 6oEGl3M40QrL/component

import { useScreenVariants as useScreenVariantsjEqVmdAbnKYc } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: jEqVmdAbnKYc/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_inlab.module.css"; // plasmic-import: wjafXWEvDytFogT7SiMy2v/projectcss
import sty from "./PlasmicImagingReportList.module.css"; // plasmic-import: AFB-1jxjMqDb/css

import ArrowLeftIcon from "./icons/PlasmicIcon__ArrowLeft"; // plasmic-import: OPwXrI9x1012/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: I6pxicA96WJm/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: vsUaT3pPwdP4/icon

createPlasmicElementProxy;

export type PlasmicImagingReportList__VariantMembers = {};
export type PlasmicImagingReportList__VariantsArgs = {};
type VariantPropType = keyof PlasmicImagingReportList__VariantsArgs;
export const PlasmicImagingReportList__VariantProps =
  new Array<VariantPropType>();

export type PlasmicImagingReportList__ArgsType = {};
type ArgPropType = keyof PlasmicImagingReportList__ArgsType;
export const PlasmicImagingReportList__ArgProps = new Array<ArgPropType>();

export type PlasmicImagingReportList__OverridesType = {
  imagingReportList?: Flex__<"div">;
  header?: Flex__<"div">;
  svg?: Flex__<"svg">;
  imagingReport?: Flex__<typeof ApiFetcherComponent>;
  viewPacsButton?: Flex__<typeof Button>;
  imagingReportList2?: Flex__<"div">;
  imagingReportCard?: Flex__<"div">;
  imagingTitledatetime?: Flex__<"div">;
  imagingTitle?: Flex__<"div">;
  imagingDatetime?: Flex__<"div">;
  imagingType?: Flex__<"div">;
  switchingTabs?: Flex__<"div">;
  switchingTab?: Flex__<typeof SwitchingTab>;
  redirectToLoginPage?: Flex__<typeof RedirectToLoginPage>;
  redirectToNamespaceSelection?: Flex__<typeof RedirectToNamespaceSelection>;
  onloadUserPatientInteractionCount?: Flex__<
    typeof OnloadUserPatientInteractionCount
  >;
};

export interface DefaultImagingReportListProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicImagingReportList__RenderFunc(props: {
  variants: PlasmicImagingReportList__VariantsArgs;
  args: PlasmicImagingReportList__ArgsType;
  overrides: PlasmicImagingReportList__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "viewPacsButton.isDisabled",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"imagingReportList"}
        data-plasmic-override={overrides.imagingReportList}
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
          sty.imagingReportList
        )}
      >
        <div
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames(projectcss.all, sty.header)}
        >
          {false ? (
            <ArrowLeftIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              onClick={async event => {
                const $steps = {};

                $steps["goToHomepage"] = true
                  ? (() => {
                      const actionArgs = { destination: `/patients` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHomepage"] != null &&
                  typeof $steps["goToHomepage"] === "object" &&
                  typeof $steps["goToHomepage"].then === "function"
                ) {
                  $steps["goToHomepage"] = await $steps["goToHomepage"];
                }
              }}
              role={"img"}
            />
          ) : null}
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ulPY
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return String($ctx.params.patient_name);
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
        </div>
        <ApiFetcherComponent
          data-plasmic-name={"imagingReport"}
          data-plasmic-override={overrides.imagingReport}
          className={classNames("__wab_instance", sty.imagingReport)}
          headers={(() => {
            try {
              return {
                "X-Namespace": localStorage.getItem("inlab_user_namespace_id")
              };
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          method={"GET"}
          path={`/api/v2/patient/${$ctx.params.code}/radiology_services/recent?offset=0&limit=20`}
          ref={ref => {
            $refs["imagingReport"] = ref;
          }}
        >
          <DataCtxReader__>
            {$ctx => (
              <React.Fragment>
                <Button
                  data-plasmic-name={"viewPacsButton"}
                  data-plasmic-override={overrides.viewPacsButton}
                  className={classNames("__wab_instance", sty.viewPacsButton)}
                  isDisabled={generateStateValueProp($state, [
                    "viewPacsButton",
                    "isDisabled"
                  ])}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToPage"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: (() => {
                              try {
                                return $ctx.fetched_data.data.pacs_url;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()
                          };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToPage"] != null &&
                      typeof $steps["goToPage"] === "object" &&
                      typeof $steps["goToPage"].then === "function"
                    ) {
                      $steps["goToPage"] = await $steps["goToPage"];
                    }
                  }}
                  onIsDisabledChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, [
                      "viewPacsButton",
                      "isDisabled"
                    ])(eventArgs[0]);
                  }}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rsAXu
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#FFFFFF" }}
                      >
                        {"View PACS"}
                      </span>
                    </React.Fragment>
                  </div>
                </Button>
                {$ctx.fetched_data.loading === true ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xjbZv
                    )}
                  >
                    {
                      "\u0644\u0637\u0641\u0627 \u0645\u0646\u062a\u0638\u0631 \u0628\u0645\u0627\u0646\u06cc\u062f"
                    }
                  </div>
                ) : null}
                {$ctx.fetched_data.loading === false &&
                $ctx.fetched_data.data.radiology_services == 0 ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__scVr8
                    )}
                  >
                    {
                      "\u06af\u0632\u0627\u0631\u0634\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u0627\u0633\u062a "
                    }
                  </div>
                ) : null}
                {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $ctx.fetched_data.data.radiology_services;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()
                ).map((__plasmic_item_0, __plasmic_idx_0) => {
                  const currentItem = __plasmic_item_0;
                  const currentIndex = __plasmic_idx_0;
                  return (
                    <Stack__
                      as={"div"}
                      data-plasmic-name={"imagingReportList2"}
                      data-plasmic-override={overrides.imagingReportList2}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.imagingReportList2
                      )}
                      key={currentIndex}
                    >
                      <div
                        data-plasmic-name={"imagingReportCard"}
                        data-plasmic-override={overrides.imagingReportCard}
                        className={classNames(
                          projectcss.all,
                          sty.imagingReportCard
                        )}
                        onClick={async event => {
                          const $steps = {};

                          $steps["goToImagingReportDatail"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: `/patient/${(() => {
                                    try {
                                      return $ctx.params.code;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}/${(() => {
                                    try {
                                      return $ctx.params.patient_name;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}/report/detail/${(() => {
                                    try {
                                      return currentItem.id;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}`
                                };
                                return (({ destination }) => {
                                  if (
                                    typeof destination === "string" &&
                                    destination.startsWith("#")
                                  ) {
                                    document
                                      .getElementById(destination.substr(1))
                                      .scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    __nextRouter?.push(destination);
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["goToImagingReportDatail"] != null &&
                            typeof $steps["goToImagingReportDatail"] ===
                              "object" &&
                            typeof $steps["goToImagingReportDatail"].then ===
                              "function"
                          ) {
                            $steps["goToImagingReportDatail"] = await $steps[
                              "goToImagingReportDatail"
                            ];
                          }
                        }}
                      >
                        <Stack__
                          as={"div"}
                          data-plasmic-name={"imagingTitledatetime"}
                          data-plasmic-override={overrides.imagingTitledatetime}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.imagingTitledatetime
                          )}
                        >
                          <div
                            data-plasmic-name={"imagingTitle"}
                            data-plasmic-override={overrides.imagingTitle}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.imagingTitle
                            )}
                          >
                            <React.Fragment>
                              {currentItem.service_name}
                            </React.Fragment>
                          </div>
                          <div
                            data-plasmic-name={"imagingDatetime"}
                            data-plasmic-override={overrides.imagingDatetime}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.imagingDatetime
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                const gregorianDate = new Date(
                                  currentItem.service_datetime
                                );
                                const shamsiDate = new Intl.DateTimeFormat(
                                  "fa-IR"
                                ).format(gregorianDate);
                                const shamsiTime =
                                  gregorianDate.toLocaleTimeString("fa-IR", {
                                    hour12: false
                                  });
                                const englishDate = shamsiDate.replace(
                                  /[۰-۹]/g,
                                  d =>
                                    String.fromCharCode(d.charCodeAt(0) - 1728)
                                );
                                const englishTime = shamsiTime.replace(
                                  /[۰-۹]/g,
                                  d =>
                                    String.fromCharCode(d.charCodeAt(0) - 1728)
                                );
                                return `${englishDate}  ${englishTime}`;
                              })()}
                            </React.Fragment>
                          </div>
                        </Stack__>
                        <div
                          data-plasmic-name={"imagingType"}
                          data-plasmic-override={overrides.imagingType}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.imagingType
                          )}
                        >
                          <React.Fragment>
                            {currentItem.title.replace(/\(\s+#\s*\)/g, "")}
                          </React.Fragment>
                        </div>
                      </div>
                    </Stack__>
                  );
                })}
              </React.Fragment>
            )}
          </DataCtxReader__>
        </ApiFetcherComponent>
        <div
          data-plasmic-name={"switchingTabs"}
          data-plasmic-override={overrides.switchingTabs}
          className={classNames(projectcss.all, sty.switchingTabs)}
        >
          <SwitchingTab
            data-plasmic-name={"switchingTab"}
            data-plasmic-override={overrides.switchingTab}
            className={classNames("__wab_instance", sty.switchingTab)}
          />
        </div>
        <RedirectToLoginPage
          data-plasmic-name={"redirectToLoginPage"}
          data-plasmic-override={overrides.redirectToLoginPage}
          className={classNames("__wab_instance", sty.redirectToLoginPage)}
        />

        <RedirectToNamespaceSelection
          data-plasmic-name={"redirectToNamespaceSelection"}
          data-plasmic-override={overrides.redirectToNamespaceSelection}
          className={classNames(
            "__wab_instance",
            sty.redirectToNamespaceSelection
          )}
        />

        <OnloadUserPatientInteractionCount
          data-plasmic-name={"onloadUserPatientInteractionCount"}
          data-plasmic-override={overrides.onloadUserPatientInteractionCount}
          className={classNames(
            "__wab_instance",
            sty.onloadUserPatientInteractionCount
          )}
          patientIdForOnloadUserPatientInteractionCount={(() => {
            try {
              return $ctx.params.code;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  imagingReportList: [
    "imagingReportList",
    "header",
    "svg",
    "imagingReport",
    "viewPacsButton",
    "imagingReportList2",
    "imagingReportCard",
    "imagingTitledatetime",
    "imagingTitle",
    "imagingDatetime",
    "imagingType",
    "switchingTabs",
    "switchingTab",
    "redirectToLoginPage",
    "redirectToNamespaceSelection",
    "onloadUserPatientInteractionCount"
  ],
  header: ["header", "svg"],
  svg: ["svg"],
  imagingReport: [
    "imagingReport",
    "viewPacsButton",
    "imagingReportList2",
    "imagingReportCard",
    "imagingTitledatetime",
    "imagingTitle",
    "imagingDatetime",
    "imagingType"
  ],
  viewPacsButton: ["viewPacsButton"],
  imagingReportList2: [
    "imagingReportList2",
    "imagingReportCard",
    "imagingTitledatetime",
    "imagingTitle",
    "imagingDatetime",
    "imagingType"
  ],
  imagingReportCard: [
    "imagingReportCard",
    "imagingTitledatetime",
    "imagingTitle",
    "imagingDatetime",
    "imagingType"
  ],
  imagingTitledatetime: [
    "imagingTitledatetime",
    "imagingTitle",
    "imagingDatetime"
  ],
  imagingTitle: ["imagingTitle"],
  imagingDatetime: ["imagingDatetime"],
  imagingType: ["imagingType"],
  switchingTabs: ["switchingTabs", "switchingTab"],
  switchingTab: ["switchingTab"],
  redirectToLoginPage: ["redirectToLoginPage"],
  redirectToNamespaceSelection: ["redirectToNamespaceSelection"],
  onloadUserPatientInteractionCount: ["onloadUserPatientInteractionCount"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  imagingReportList: "div";
  header: "div";
  svg: "svg";
  imagingReport: typeof ApiFetcherComponent;
  viewPacsButton: typeof Button;
  imagingReportList2: "div";
  imagingReportCard: "div";
  imagingTitledatetime: "div";
  imagingTitle: "div";
  imagingDatetime: "div";
  imagingType: "div";
  switchingTabs: "div";
  switchingTab: typeof SwitchingTab;
  redirectToLoginPage: typeof RedirectToLoginPage;
  redirectToNamespaceSelection: typeof RedirectToNamespaceSelection;
  onloadUserPatientInteractionCount: typeof OnloadUserPatientInteractionCount;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicImagingReportList__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicImagingReportList__VariantsArgs;
    args?: PlasmicImagingReportList__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicImagingReportList__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicImagingReportList__ArgsType,
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
          internalArgPropNames: PlasmicImagingReportList__ArgProps,
          internalVariantPropNames: PlasmicImagingReportList__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicImagingReportList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "imagingReportList") {
    func.displayName = "PlasmicImagingReportList";
  } else {
    func.displayName = `PlasmicImagingReportList.${nodeName}`;
  }
  return func;
}

export const PlasmicImagingReportList = Object.assign(
  // Top-level PlasmicImagingReportList renders the root element
  makeNodeComponent("imagingReportList"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    svg: makeNodeComponent("svg"),
    imagingReport: makeNodeComponent("imagingReport"),
    viewPacsButton: makeNodeComponent("viewPacsButton"),
    imagingReportList2: makeNodeComponent("imagingReportList2"),
    imagingReportCard: makeNodeComponent("imagingReportCard"),
    imagingTitledatetime: makeNodeComponent("imagingTitledatetime"),
    imagingTitle: makeNodeComponent("imagingTitle"),
    imagingDatetime: makeNodeComponent("imagingDatetime"),
    imagingType: makeNodeComponent("imagingType"),
    switchingTabs: makeNodeComponent("switchingTabs"),
    switchingTab: makeNodeComponent("switchingTab"),
    redirectToLoginPage: makeNodeComponent("redirectToLoginPage"),
    redirectToNamespaceSelection: makeNodeComponent(
      "redirectToNamespaceSelection"
    ),
    onloadUserPatientInteractionCount: makeNodeComponent(
      "onloadUserPatientInteractionCount"
    ),

    // Metadata about props expected for PlasmicImagingReportList
    internalVariantProps: PlasmicImagingReportList__VariantProps,
    internalArgProps: PlasmicImagingReportList__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicImagingReportList;
/* prettier-ignore-end */

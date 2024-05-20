import { BillStatus } from "../features/bills/billsSlice"

export const billsFixture = [
  {
    bill: {
      act: null,
      amendmentLists: [],
      billNo: "35",
      billType: "Public",
      billTypeURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
      billYear: "2024",
      debates: [],
      events: [
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2024-04-29",
              },
              {
                date: "2024-04-29",
              },
              {
                date: "2024-05-14",
              },
            ],
            eventURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/approved-for-initiation",
            showAs: "Approved for Initiation",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/35/approved-for-initiation",
          },
        },
      ],
      lastUpdated: "2024-05-15T09:24:21.270000+00:00",
      longTitleEn:
        "<p>Bill entitled an Act to amend the Family Law (Divorce) Act 1996 to provide for swifter access to divorce proceedings.</p>\n",
      longTitleGa:
        "<p>Bille dá ngairtear Acht do leasú an Achta um an Dlí Teaghlaigh (Colscaradh), 1996 chun socrú a dhéanamh maidir le rochtain níos tapa ar imeachtaí colscartha.</p>\n",
      method: "Introduced",
      methodURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/introduced",
      mostRecentStage: {
        event: {
          chamber: {
            chamberCode: "dail",
            showAs: "Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
          },
          dates: [
            {
              date: "2024-05-14",
            },
          ],
          house: {
            chamberCode: "dail",
            chamberType: "house",
            houseCode: "dail",
            houseNo: "33",
            showAs: "33rd Dáil",
            uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
          },
          progressStage: 2,
          showAs: "Second Stage",
          stageCompleted: false,
          stageOutcome: "Current",
          stageURI: "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
          uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/35/stage/dail/2",
        },
      },
      originHouse: {
        showAs: "Dáil Éireann",
        uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
      },
      originHouseURI: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
      relatedDocs: [
        {
          relatedDoc: {
            date: "2024-05-14",
            docType: "memo",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/35/eng/memo/b3524d-memo.pdf",
              },
              xml: null,
            },
            lang: "eng",
            showAs: "Explanatory Memorandum",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/35/eng/memo",
          },
        },
      ],
      shortTitleEn: "Family Law (Divorce) (Amendment) Bill 2024",
      shortTitleGa: "An Bille um an Dlí Teaghlaigh (Colscaradh) (Leasú), 2024",
      source: "Private Member",
      sourceURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/private-member",
      sponsors: [
        {
          sponsor: {
            as: {
              showAs: null,
              uri: null,
            },
            by: {
              showAs: "Patrick Costello",
              uri: "https://data.oireachtas.ie/ie/oireachtas/member/id/Patrick-Costello.D.2020-02-08",
            },
            isPrimary: true,
          },
        },
      ],
      stages: [
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2024-04-29",
              },
              {
                date: "2024-04-29",
              },
              {
                date: "2024-05-14",
              },
              {
                date: "2024-05-14",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 1,
            showAs: "First Stage",
            stageCompleted: true,
            stageOutcome: null,
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/35/stage/dail/1",
          },
        },
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2024-05-14",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: false,
            stageOutcome: "Current",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/35/stage/dail/2",
          },
        },
      ],
      status: BillStatus.Current,
      statusURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/published",
      uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/35",
      versions: [
        {
          version: {
            date: "2024-05-14",
            docType: "bill",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/35/eng/initiated/b3524d.pdf",
              },
              xml: null,
            },
            lang: "eng",
            showAs: "As Initiated",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/35/eng/initiated",
          },
        },
      ],
    },
    billSort: {
      actNoSort: null,
      actShortTitleEnSort: null,
      actShortTitleGaSort: null,
      actYearSort: null,
      billNoSort: 35,
      billShortTitleEnSort: "family-law-divorce-amendment-bill-2024",
      billShortTitleGaSort:
        "an-bille-um-an-dli-teaghlaigh-colscaradh-leasu-2024",
      billYearSort: 2024,
    },
    contextDate: "2024-05-14",
  },
  {
    bill: {
      act: null,
      amendmentLists: [
        {
          amendmentList: {
            amendmentTypeUri: {
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/amendment-type/numberedList",
            },
            chamber: {
              showAs: "Dail",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/dail",
            },
            date: "2024-04-23",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/dail/4/amendment/numberedList/eng/b114a22d-drnl.pdf",
              },
              xml: null,
            },
            showAs: "Numbered List [Dáil]",
            stage: {
              showAs: "Report Stage",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/dail/4",
            },
            stageNo: "4",
          },
        },
        {
          amendmentList: {
            amendmentTypeUri: {
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/amendment-type/numberedList",
            },
            chamber: {
              showAs: "Dail",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/dail",
            },
            date: "2023-07-10",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/dail/3/amendment/numberedList/eng/b11422d-dcnl.pdf",
              },
              xml: null,
            },
            showAs: "Numbered List [Dáil]",
            stage: {
              showAs: "Committee Stage",
              uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/dail/3",
            },
            stageNo: "3",
          },
        },
      ],
      billNo: "114",
      billType: "Public",
      billTypeURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
      billYear: "2022",
      debates: [
        {
          chamber: {
            showAs: "Seanad Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
          },
          date: "2024-05-14",
          debateSectionId: "dbsect_9",
          showAs: "Gambling Regulation Bill 2022: Second Stage",
          uri: "https://data.oireachtas.ie/akn/ie/debateRecord/seanad/2024-05-14/debate/main",
        },
        {
          chamber: {
            showAs: "Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
          },
          date: "2024-05-01",
          debateSectionId: "dbsect_17",
          showAs:
            "Gambling Regulation Bill 2022: Report Stage (Resumed) and Final Stage",
          uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2024-05-01/debate/main",
        },
        {
          chamber: {
            showAs: "Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
          },
          date: "2024-04-24",
          debateSectionId: "dbsect_16",
          showAs: "Gambling Regulation Bill 2022: Report Stage",
          uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2024-04-24/debate/main",
        },
        {
          chamber: {
            showAs: "Select Committee on Justice",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/committee",
          },
          date: "2023-07-11",
          debateSectionId: "dbsect_2",
          showAs: "Gambling Regulation Bill 2022: Committee Stage",
          uri: "https://data.oireachtas.ie/akn/ie/debateRecord/select_committee_on_justice/2023-07-11/debate/main",
        },
        {
          chamber: {
            showAs: "Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
          },
          date: "2022-12-06",
          debateSectionId: "dbsect_11",
          showAs: "Gambling Regulation Bill 2022: Second Stage",
          uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2022-12-06/debate/main",
        },
        {
          chamber: {
            showAs: "Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
          },
          date: "2022-12-06",
          debateSectionId: "dbsect_12",
          showAs: "Gambling Regulation Bill 2022: Referral to Select Committee",
          uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2022-12-06/debate/main",
        },
      ],
      events: [
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2022-12-02",
              },
            ],
            eventURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
            showAs: "Published",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/published",
          },
        },
      ],
      lastUpdated: "2024-05-15T11:53:08.530000+00:00",
      longTitleEn:
        '<p style="text-align:justify">Bill entitled an Act to provide for the establishment of a body to be known as <em>Údarás Rialála&nbsp;</em><em><em>Cearrbhachais na hÉireann</em></em> or, in the English language, the Gambling Regulatory Authority of Ireland for the purposes of licensing and regulating betting, gaming, certain lotteries and the sale or supply of products or services related to gambling; to provide for the funding of that Authority by means of imposition of a charge on licensees; to provide for the establishment and maintenance of a register of persons who hold gambling licences in the State and a National Gambling Exclusion Register; to provide for the establishment of a Social Impact Fund to, among other matters, finance research into, raise awareness of, and eliminate or reduce, compulsive and excessive gambling; to provide for contributions to the Fund by certain licensees; to provide for the imposition of obligations on those licensees including obligations relating to advertising, promotion and sponsorship for the purposes of safeguarding persons participating in gambling; to provide for the prohibition of children participating in gambling or being employed in the gambling industry; to provide, for the purposes of ensuring conditions attached to gambling licences and obligations imposed on licensees are complied with, for compliance and enforcement measures; and for those and other purposes to repeal the Totalisator Act 1929, the Betting Act 1931, the Gaming and Lotteries Act 1956, to revoke certain statutory instruments and to provide for the consequential amendment of certain other enactments; and to provide for related&nbsp;matters.</p>\n',
      longTitleGa:
        "<p>Bille dá ngairtear Acht do dhéanamh socrú maidir le comhlacht a bhunú ar a dtabharfar Údarás Rialála Cearrbhachais na hÉireann nó, sa Bhéarla, the Gambling Regulatory Authority of Ireland, chun gealltóireacht, cearrbhachas, crannchuir áirithe agus díol nó soláthar táirgí nó seirbhísí a bhaineann le cearrbhachas a cheadúnú agus a rialáil; do dhéanamh socrú maidir le maoiniú an Údaráis sin trí mhuirear a fhorchur ar cheadúnaithe; do dhéanamh socrú maidir le clár de dhaoine a shealbhaíonn ceadúnais chearrbhachais sa Stát agus Clár Náisiúnta Eisiaimh Cearrbhachais a bhunú agus a chothabháil; do dhéanamh socrú maidir le Ciste Tionchair Shóisialta a bhunú chun taighde ar chearrbhachas iallaigh agus iomarcach a mhaoiniú, chun cur le feasacht ar chearrbhachas den sórt sin, agus chun deireadh a chur leis nó é a laghdú, i measc nithe eile; do dhéanamh socrú maidir le ranníocaíochtaí leis an gCiste ag ceadúnaithe áirithe; do dhéanamh socrú maidir le hoibleagáidí a fhorchur ar na ceadúnaithe sin, lena n-áirítear oibleagáidí a bhaineann le fógraíocht, cur chun cinn agus urraíocht, chun daoine a ghlacann páirt i gcearrbhachas a chosaint; do dhéanamh socrú maidir le toirmeasc a chur le leanaí do ghlacadh páirt i gcearrbhachas nó a bheith fostaithe sa tionscal cearrbhachais; do dhéanamh socrú, chun a chinntiú go ndéanfar coinníollacha a ghabhann le ceadúnais chearrbhachais agus oibleagáidí a fhorchuirtear ar cheadúnaithe a chomhlíonadh, maidir le bearta um chomhlíonadh agus bearta forfheidhmiúcháin; agus, chun na gcríoch sin agus chun críoch eile, d’aisghairm Acht na Suimitheoirí, 1929, an Achta um Gheall-Chur, 1931, an Achta um Chearrbhachas agus Crannchuir, 1956, do chúlghairm ionstraimí reachtúla áirithe agus do dhéanamh socrú maidir le leasú iarmhartach a dhéanamh ar achtacháin áirithe eile; agus do dhéanamh socrú i dtaobh nithe gaolmhara.</p>\n",
      method: "Presented",
      methodURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/presented",
      mostRecentStage: {
        event: {
          chamber: {
            chamberCode: "seanad",
            showAs: "Seanad Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
          },
          dates: [
            {
              date: "2024-05-14",
            },
          ],
          house: {
            chamberCode: "seanad",
            chamberType: "house",
            houseCode: "seanad",
            houseNo: "26",
            showAs: "26th Seanad",
            uri: "https://data.oireachtas.ie/ie/oireachtas/house/seanad/26",
          },
          progressStage: 6,
          showAs: "Second Stage",
          stageCompleted: true,
          stageOutcome: null,
          stageURI: "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
          uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/stage/seanad/2",
        },
      },
      originHouse: {
        showAs: "Dáil Éireann",
        uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
      },
      originHouseURI: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
      relatedDocs: [
        {
          relatedDoc: {
            date: "2022-12-15",
            docType: "gluais",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/mul/gluais/gluais-51-an-bille-um-rialail-cearrbhachais-2022.pdf",
              },
              xml: null,
            },
            lang: "mul",
            showAs: "Glossary/Gluais",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/mul/gluais",
          },
        },
        {
          relatedDoc: {
            date: "2022-12-02",
            docType: "memo",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/eng/memo/b11422d-memo.pdf",
              },
              xml: null,
            },
            lang: "eng",
            showAs: "Explanatory Memorandum",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/eng/memo",
          },
        },
      ],
      shortTitleEn: "Gambling Regulation Bill 2022",
      shortTitleGa: "An Bille um Rialáil Cearrbhachais, 2022",
      source: "Government",
      sourceURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/government",
      sponsors: [
        {
          sponsor: {
            as: {
              showAs: "Minister for Justice",
              uri: null,
            },
            by: {
              showAs: null,
              uri: null,
            },
            isPrimary: true,
          },
        },
      ],
      stages: [
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2022-12-02",
              },
              {
                date: "2022-12-02",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 1,
            showAs: "First Stage",
            stageCompleted: true,
            stageOutcome: null,
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/stage/dail/1",
          },
        },
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2022-12-06",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: null,
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/stage/dail/2",
          },
        },
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2022-12-06",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 3,
            showAs: "Committee Stage",
            stageCompleted: true,
            stageOutcome: null,
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/3",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/stage/dail/3",
          },
        },
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2023-07-12",
              },
              {
                date: "2023-07-12",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 4,
            showAs: "Report Stage",
            stageCompleted: true,
            stageOutcome: null,
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/4",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/stage/dail/4",
          },
        },
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2024-05-01",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 5,
            showAs: "Fifth Stage",
            stageCompleted: true,
            stageOutcome: null,
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/5",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/stage/dail/5",
          },
        },
        {
          event: {
            chamber: {
              chamberCode: "seanad",
              showAs: "Seanad Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/seanad",
            },
            dates: [
              {
                date: "2024-05-14",
              },
            ],
            house: {
              chamberCode: "seanad",
              chamberType: "house",
              houseCode: "seanad",
              houseNo: "26",
              showAs: "26th Seanad",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/seanad/26",
            },
            progressStage: 6,
            showAs: "Second Stage",
            stageCompleted: true,
            stageOutcome: null,
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/stage/seanad/2",
          },
        },
      ],
      status: BillStatus.Current,
      statusURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/published",
      uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114",
      versions: [
        {
          version: {
            date: "2024-05-01",
            docType: "bill",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/eng/ver_b/b114b22d.pdf",
              },
              xml: null,
            },
            lang: "eng",
            showAs: "As passed by Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/eng/ver_b",
          },
        },
        {
          version: {
            date: "2023-07-11",
            docType: "bill",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/eng/ver_a/b114a22d.pdf",
              },
              xml: null,
            },
            lang: "eng",
            showAs: "As amended in Committee/Select Committee [Dáil Éireann]",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/eng/ver_a",
          },
        },
        {
          version: {
            date: "2022-12-02",
            docType: "bill",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/eng/initiated/b11422d.pdf",
              },
              xml: null,
            },
            lang: "eng",
            showAs: "As Initiated",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2022/114/eng/initiated",
          },
        },
      ],
    },
    billSort: {
      actNoSort: null,
      actShortTitleEnSort: null,
      actShortTitleGaSort: null,
      actYearSort: null,
      billNoSort: 114,
      billShortTitleEnSort: "gambling-regulation-bill-2022",
      billShortTitleGaSort: "an-bille-um-rialail-cearrbhachais-2022",
      billYearSort: 2022,
    },
    contextDate: "2024-05-14",
  },
  {
    bill: {
      act: null,
      amendmentLists: [],
      billNo: "31",
      billType: "Public",
      billTypeURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-type/public",
      billYear: "2024",
      debates: [
        {
          chamber: {
            showAs: "Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
          },
          date: "2024-05-16",
          debateSectionId: "dbsect_28",
          showAs:
            "Health (Miscellaneous Provisions) (No. 2) Bill 2024: Second Stage (Resumed)",
          uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2024-05-16/debate/main",
        },
        {
          chamber: {
            showAs: "Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
          },
          date: "2024-05-16",
          debateSectionId: "dbsect_29",
          showAs:
            "Health (Miscellaneous Provisions) (No.2) Bill 2024: Referral to Select Committee",
          uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2024-05-16/debate/main",
        },
        {
          chamber: {
            showAs: "Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
          },
          date: "2024-05-14",
          debateSectionId: "dbsect_14",
          showAs:
            "Health (Miscellaneous Provisions) (No. 2) Bill 2024: Second Stage",
          uri: "https://data.oireachtas.ie/akn/ie/debateRecord/dail/2024-05-14/debate/main",
        },
      ],
      events: [
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2024-05-02",
              },
            ],
            eventURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-event/published",
            showAs: "Published",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/31/published",
          },
        },
      ],
      lastUpdated: "2024-05-15T11:57:03.270000+00:00",
      longTitleEn:
        "<p>Bill entitled an Act to make certain provision in relation to residential services; and, for the foregoing purpose, to amend the Health Act 2007; to amend the Nursing Homes Support Scheme Act 2009; and to provide for related matters.</p>\n",
      longTitleGa:
        "<p>Bille dá ngairtear Acht do dhéanamh foráil áirithe i ndáil le seirbhísí cónaithe; agus, chun na críche réamhráite, do leasú an Achta Sláinte, 2007; do leasú an Achta fán Scéim um Thacaíocht Tithe Banaltrais, 2009; agus do dhéanamh socrú i dtaobh nithe gaolmhara.</p>\n",
      method: "Presented",
      methodURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-method/presented",
      mostRecentStage: {
        event: {
          chamber: {
            chamberCode: "dail",
            showAs: "Dáil Éireann",
            uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
          },
          dates: [
            {
              date: "2024-05-14",
            },
          ],
          house: {
            chamberCode: "dail",
            chamberType: "house",
            houseCode: "dail",
            houseNo: "33",
            showAs: "33rd Dáil",
            uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
          },
          progressStage: 2,
          showAs: "Second Stage",
          stageCompleted: false,
          stageOutcome: "Current",
          stageURI: "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
          uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/31/stage/dail/2",
        },
      },
      originHouse: {
        showAs: "Dáil Éireann",
        uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
      },
      originHouseURI: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
      relatedDocs: [
        {
          relatedDoc: {
            date: "2024-05-02",
            docType: "memo",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/31/eng/memo/b3124d-memo.pdf",
              },
              xml: null,
            },
            lang: "eng",
            showAs: "Explanatory Memorandum",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/31/eng/memo",
          },
        },
      ],
      shortTitleEn: "Health (Miscellaneous Provisions) (No. 2) Bill 2024",
      shortTitleGa:
        "An Bille Sláinte (Forálacha Ilghnéitheacha) (Uimh. 2), 2024",
      source: "Government",
      sourceURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-source/government",
      sponsors: [
        {
          sponsor: {
            as: {
              showAs: "Minister for Health",
              uri: null,
            },
            by: {
              showAs: null,
              uri: null,
            },
            isPrimary: true,
          },
        },
      ],
      stages: [
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2024-05-02",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 1,
            showAs: "First Stage",
            stageCompleted: false,
            stageOutcome: "Current",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/1",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/31/stage/dail/1",
          },
        },
        {
          event: {
            chamber: {
              chamberCode: "dail",
              showAs: "Dáil Éireann",
              uri: "https://data.oireachtas.ie/ie/oireachtas/def/house/dail",
            },
            dates: [
              {
                date: "2024-05-14",
              },
            ],
            house: {
              chamberCode: "dail",
              chamberType: "house",
              houseCode: "dail",
              houseNo: "33",
              showAs: "33rd Dáil",
              uri: "https://data.oireachtas.ie/ie/oireachtas/house/dail/33",
            },
            progressStage: 2,
            showAs: "Second Stage",
            stageCompleted: false,
            stageOutcome: "Current",
            stageURI:
              "https://data.oireachtas.ie/ie/oireachtas/def/bill-stage/2",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/31/stage/dail/2",
          },
        },
      ],
      status: BillStatus.Current,
      statusURI:
        "https://data.oireachtas.ie/ie/oireachtas/def/bill-status/published",
      uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/31",
      versions: [
        {
          version: {
            date: "2024-05-02",
            docType: "bill",
            formats: {
              pdf: {
                uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/31/eng/initiated/b3124d.pdf",
              },
              xml: null,
            },
            lang: "eng",
            showAs: "As Initiated",
            uri: "https://data.oireachtas.ie/ie/oireachtas/bill/2024/31/eng/initiated",
          },
        },
      ],
    },
    billSort: {
      actNoSort: null,
      actShortTitleEnSort: null,
      actShortTitleGaSort: null,
      actYearSort: null,
      billNoSort: 31,
      billShortTitleEnSort: "health-miscellaneous-provisions-no-2-bill-2024",
      billShortTitleGaSort:
        "an-bille-slainte-foralacha-ilghneitheacha-uimh-2-2024",
      billYearSort: 2024,
    },
    contextDate: "2024-05-14",
  },
]

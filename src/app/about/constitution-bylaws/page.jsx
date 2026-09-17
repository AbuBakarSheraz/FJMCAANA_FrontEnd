import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const ARTICLES = [
  {
    title: "Article I: NAME",
    content: (
      <p>
        The name of this organization shall be Fatima Jinnah Medical College
        Alumni Association of North America (FJMC Alumni Association).
        Hereafter it will be referred to as the “Association”.
      </p>
    ),
  },
  {
    title: "Article II: AIMS AND OBJECTIVES",
    content: (
      <>
        <p>
          The association shall be a non-profit, non-political, professional,
          educational, humanitarian organization. The objective of this
          association shall be to bring the Fatima Jinnah Medical College
          graduates into one compact organization. The aims and objectives
          shall be:
        </p>

        <ol>
          <li>
            To the advancement of medical science, elevation of standard of
            medical education, and the extension of medical knowledge in
            Pakistan, particularly at the Fatima Jinnah Medical College,
            Lahore, Pakistan.
          </li>
          <li>
            To encourage medical education and delivery of better health care
            in Pakistan specifically by arranging for donation of medical
            literature, medical supplies, and by arranging lecture tours,
            medical conferences, and seminars in Pakistan.
          </li>
          <li>
            To assist Pakistani physicians, especially the graduates of the
            Fatima Jinnah Medical College, in obtaining post graduate training
            in North America, and during their orientation and adjustment.
          </li>
          <li>To promote delivery of health care in Pakistan.</li>
          <li>
            To participate in medical relief and charitable activities in
            North America, Pakistan and other countries.
          </li>
          <li>
            To guard and foster medical interest of member physicians and to
            interact with similar associations who would preserve, protect and
            enhance the image of the medical profession and Pakistani
            physicians.
          </li>
          <li>
            To help Pakistani Americans in North America, develop pride in
            Pakistani culture, preserve and promote Pakistani heritage and
            values.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Article III: MEMBERSHIP",
    content: (
      <p>
        The membership of the association shall be of the following
        categories: Active, Students, Honorary, Emeritus and Affiliate.
        Unless otherwise specified in the bylaws, Active members shall be
        entitled to all the privileges of the association including the right
        to vote and hold office. Honorary, Affiliate and Emeritus members
        shall be entitled to all the privileges of the association but shall
        not vote or hold office therein.
      </p>
    ),
  },
  {
    title: "Article IV: INTERNAL STRUCTURE AND ORGANIZATION",
    content: (
      <>
        <ol>
          <li>
            <strong>General Body:</strong> It shall consist of duly registered
            members of the Association according to the provisions provided
            herein. This will be the supreme authority of the Association
            wielding absolute power on the conduct of the affairs of the
            Association. It, however, for the smoother running of its affairs,
            may delegate this authority to various components as outlined
            herein. All actions taken by an officer or committee of the
            Association may be approved, rejected or amended by this body.
          </li>

          <li>
            <strong>Board of Trustees:</strong> Shall act as the overseers of
            the Association. It shall consist of active members of the
            Association elected as prescribed in the bylaws.
          </li>

          <li>
            <strong>Executive Council:</strong> Shall be the legislative and
            the executive body of the Association and shall consist of elected
            officers.
            <ol type="a">
              <li>This council shall fix the date and place of meetings.</li>
              <li>
                It shall create and authorize the appointment of standing
                committees and keep an up to date directory of members.
              </li>
              <li>
                It shall control the management of the affairs of the
                Association and shall be responsible for proposing budget at
                annual meeting.
              </li>
              <li>
                It shall have the total control of all the funds and property
                of the Association, except as limited by the bylaws, and{" "}
                <strong>
                  shall act for the Association as a whole between sessions of
                  the general body.
                </strong>
              </li>
            </ol>
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Article V: OFFICERS AND ELECTED REPRESENTATIVES",
    content: (
      <ol>
        <li>
          The officers of this Association shall be the President, the
          President-elect, Immediate Past President, the Secretary and the
          Treasurer.
        </li>
        <li>
          The President, the President-elect, the Secretary and the Treasurer
          shall be elected by the general body, except as otherwise provided
          by the bylaws with respect to the filling of the vacancies.
        </li>
        <li>
          There shall be two Representatives, elected by the general
          membership, as defined in the bylaws.
        </li>
        <li>
          Each officer of the Association and the representatives shall
          maintain a physical residence in North America during their tenure.
        </li>
      </ol>
    ),
  },
  {
    title: "Article VI: FINANCES",
    content: (
      <ol>
        <li>
          Annual dues, special assessments, and voluntary contributions shall
          finance funds for meetings and expenses of the Association
          activities.
        </li>
        <li>
          Annual membership dues and assessments shall be fixes by the Council
          and approved by the general body.
        </li>
        <li>
          The Treasurer shall present the financial status of the Association
          to the general membership at its annual meeting.
        </li>
        <li>
          No part of the net earnings of the Association shall inure to the
          benefit of or be distributable to, its members, trustees, officers,
          or private persons, except that the Association shall be authorized
          to pay reasonable compensation for the services rendered.
        </li>
      </ol>
    ),
  },
  {
    title: "Article VII: BYLAWS",
    content: (
      <ol>
        <li>
          The Association shall adopt Bylaws for the conduct of its affairs,
          in harmony with this constitution.
        </li>
        <li>
          The Bylaws may not restrict or alter any proviso defined in this
          constitution.
        </li>
        <li>
          Robert’s Rule of Order shall be adopted for the conduct of the
          meetings.
        </li>
      </ol>
    ),
  },
  {
    title: "Article VIII: AMENDMENTS",
    content: (
      <ol>
        <li>
          Amendments to this constitution may be initiated by either one of
          these:
          <ul>
            <li>10 members of the Association in good standing.</li>
            <li>Executive council.</li>
            <li>Board of trustees.</li>
          </ul>
        </li>
        <li>
          The amendments thus initiated shall be referred to the Constitution
          and Bylaws Committee, which shall report to the council in 120 days
          with their recommendation.
        </li>
        <li>
          The council will accept, reject or amend these proposals at the
          first meeting after receiving them. At least two thirds of the
          councilors must accept an amendment for it to be sent to the General
          Body.
        </li>
        <li>
          The amendment will be circulated to the general members at least 30
          days in advance of the annual general body meeting.
        </li>
        <li>
          The amendment rejected by the council shall be returned to the
          proposer who may resubmit it with 5 additional signatures in which
          case these amendments shall be circulated to the general membership
          30 days prior to the annual meeting and will be presented to the
          general body for vote.
        </li>
        <li>
          An amendment shall be approved only when it received 50% of votes
          of total active membership.
        </li>
        <li>
          If an amendment fails to be acted upon in general body meeting for
          lack of quorum, a mailed ballot shall be sent to the general
          membership. The amendment shall become effective immediately upon
          adoption.
        </li>
      </ol>
    ),
  },
  {
    title: "Article IX: DISSOLUTION",
    content: (
      <ol>
        <li>
          No proposal for dissolution of the Association shall be considered
          unless recommended by the majority of the trustees and discussed at
          the next meeting of the council and after four week’s notice in
          writing has been given to each member in good standing. The
          Association shall not be dissolved if 5% or more of the members in
          good standing or majority of the trustees dissent.
        </li>
        <li>
          Upon the dissolution of the Association, the Board of Trustees shall,
          after paying off all of the liabilities of the Association, dispose
          of all the assets of the Association for the purposes of in such
          manner, or to such organizations organized and operated exclusively
          for charitable, educational, religious or scientific purposes.
        </li>
      </ol>
    ),
  },
];

const BYLAW_CHAPTERS = [
  {
    title: "Chapter I: ADDRESS",
    content: (
      <p>
        In the absence of a principal office the address of the Association
        shall be the location and physical address of the president of the
        Association.
      </p>
    ),
  },
  {
    title: "Chapter II: MEMBERSHIP",
    content: (
      <>
        <h4>Section 1. Active Member</h4>
        <p>
          To be eligible for active membership in the Association a physician
          must hold a valid permanent license in North America or in the
          country where she is practicing, or in Pakistan, or must be engaged
          in academic teaching, research or administration, or be enrolled in a
          post graduate training program and must comply with all the
          provisions of this Association.
        </p>

        <p>
          Physicians-in-Training may become active members if they hold a
          license to practice medicine, surgery or dentistry in their
          respective state, province or country.
        </p>

        <p>
          The categories of the active members shall include the following:
        </p>

        <ul>
          <li>Annual dues paying member.</li>
          <li>
            <strong>Lifetime member:</strong> Any active member of the
            Association, on payment of 10 years of current annual dues in one
            lump sum. Life members shall be exempt from paying registration
            fees at meetings of the Association held in the Continental United
            States and Canada.
          </li>
          <li>
            <strong>Active Members-Dues Exempt:</strong> Physician in
            Training: The Association may admit to membership physicians still
            in training and who do not have a permanent license to practice
            medicine, surgery or dentistry in their respective state, province
            or country. Candidates for election to Physician-in-Training
            membership shall provide written proof of being in an approved
            training program. Such members shall have all the privileges of
            active membership except the right to hold office.
          </li>
        </ul>

        <h4>Section 2. Emeritus Members</h4>
        <p>
          Shall be dues exempt, shall have no vote and shall hold no office.
          They may however be appointed as members of committees or task
          force, etc.
        </p>

        <h4>Section 3. Honorary Members</h4>
        <p>
          The Association may elect as an honorary member any person
          distinguished for services or attainments in medicine or the allied
          sciences, or who has rendered other services of unusual value to the
          Association or humanity. They shall be dues exempt, shall have no
          vote and hold no office.
        </p>

        <h4>Section 4. Affiliate Members</h4>
        <p>
          The Association may elect to affiliate membership lay persons or
          professionals in areas of endeavor, which are related to medicine.
          Affiliate members may serve on/or chair committees or task force of
          the Association and participate in all of its activities, but shall
          not have the right to vote or hold any office in the Association.
          The dues for the affiliate members shall be equal to 50% of the
          annual dues.
        </p>
      </>
    ),
  },
  {
    title: "Chapter 3: DUES AND ASSESSMENT",
    content: (
      <>
        <h4>Section 1. Annual dues</h4>
        <p>
          Shall be determined by the council and approved by the General body.
          The term of annual dues will be the calendar year.
        </p>

        <h4>Section 2. Arrears</h4>
        <p>
          Any member whose dues are not paid by April 30th will be considered
          in arrears and will not be eligible to hold an office in the
          Association in that year.
        </p>

        <h4>Section 3. Assessments</h4>
        <p>The council may from time to time make Special assessments.</p>
      </>
    ),
  },
  {
    title: "Chapter 4: GENERAL MEETINGS",
    content: (
      <>
        <h4>Section 1. Determination of time and place</h4>
        <p>
          During each annual session the Association may hold one or more
          general meetings. The Council shall determine the number and time of
          these general meetings. The Council shall arrange one annual meeting
          each year. Such general meetings shall be presided over by the
          President, or, in his absence, the President-elect.
        </p>

        <h4>Section 2. Actions</h4>
        <p>
          At any general meetings of this Association, the membership may
          direct the Council to appoint committees for scientific, cultural
          and social investigation of special interest and importance to the
          profession and public. Such investigation and reports shall not
          become official actions or expressions of this Association until so
          approved by the Council.
        </p>

        <h4>Section 3. Quorum</h4>
        <p>
          Presence of 20% of the voting members of the Association shall
          constitute a quorum except in cases of a resolution to reject an
          action taken by the Council whence a presence of at least 50% of the
          voting membership will constitute the required quorum. A simple
          majority of those present will be required for adoption of a
          resolution except in cases of overriding of a council action, in
          which case a majority of 2/3 of those voting will be considered
          affirmative.
        </p>
      </>
    ),
  },
  {
    title: "Chapter 5: BOARD OF TRUSTEES",
    content: (
      <>
        <h4>Section 1. Composition</h4>
        <p>
          The Board shall be composed of five (5) members of the Association.
          All trustees shall reside in North America during their term of
          office. No trustee shall hold any office in the Council during her
          trusteeship. Any Trustee may, however, be involved in any committee
          of the Association at the request of the Council or the Board.
        </p>

        <h4>Section 2. Qualifications</h4>
        <p>
          (a) The Board shall consist of the five (5) immediate past presidents
          of the Association. (b) A Trustee will not be eligible to hold
          office in the executive Council for one year after finishing a term
          of trustee.
        </p>

        <h4>Section 3. Term of office</h4>
        <p>
          Each member of the Board shall act as a Trustee for five years. The
          term of the Trustees shall be staggered so that one Trustee’s term
          expires each year and is replaced by the out going Immediate Past
          President of the executive council.
        </p>

        <h4>Section 4. Officers</h4>
        <p>
          The officers of the Board shall be a chairperson and a secretary.
          The most senior member shall act as the chairperson and the second
          most senior member shall act as a secretary. The chairpersons shall
          be the spokesperson and the presiding officer of the Board and the
          secretary shall act as the recording officer.
        </p>

        <h4>Section 5. Meetings</h4>
        <p>
          The Board shall meet at least annually at the time and place of the
          annual session of the Association and may hold any number of such
          meetings as the trustees may determine. The Board may be called into
          session by the Chairperson on her own or upon the request of the
          other trustees or when a petition is filed for the dissolution of the
          Association. The purpose of such special session shall be stated in
          the notice of call and no other business shall be transacted.
        </p>

        <h4>Section 6. Powers and Duties</h4>
        <p>
          (a) As the overseer of the Association, the Board shall be the only
          authority to receive and discuss a proposal of dissolution of the
          Association. In the event of dissolution the Board shall be the only
          body to disperse the assets of the Association. If four trustees
          dissent with the majority of the general membership, they may, after
          dispersing the assets, desire to retain the papers of incorporation
          and may revive the Association.
        </p>

        <p>
          (b) The Board of Trustees shall oversee long-range and strategic
          planning for the Association and conduct ethics and grievance
          hearings.
        </p>

        <p>
          (c) The Board of Trustees shall receive quarterly reports of the
          Association’s accounts.
        </p>
      </>
    ),
  },
  {
    title: "Chapter 6: EXECUTIVE COUNCIL",
    content: (
      <>
        <h4>Section 1. Composition</h4>
        <p>
          The council shall be composed of the officers of the Association and
          two Representatives, one from USA and one from Canada.
        </p>

        <h4>Section 2. Officers</h4>
        <p>
          Of the Council shall be the President, President-elect, Immediate
          Past President, Secretary and Treasurer of the Association.
        </p>

        <h4>Section 3. Meetings</h4>
        <p>
          The Council shall meet at least once annually. Special meetings of
          the Council may be called at any time by the President or on written
          petition of three members of the Executive Council. At special
          meetings the only subject discussed will be the one for which the
          meeting was called.
        </p>

        <h4>Section 4. Quorum</h4>
        <p>
          A quorum of the Council shall consist of four members or three
          officers.
        </p>

        <h4>Section 5. Powers and Duties</h4>
        <p>
          As the legislative body of the Association, the Council shall have
          the power and authority to adopt, institute and carry out such
          methods and measures as it may deem to be in the best interest of the
          Association including but not limited to:
        </p>

        <ol type="a">
          <li>
            It shall adopt rules and regulations for its own government and for
            the administration of the affairs of the Association.
          </li>
          <li>
            It shall have the authority to appoint committees, standing or
            special, from among its members or those not members of the
            council. Such committees shall report to the Council and their
            members may participate in debate upon their committees’ reports,
            whether or not members of the Council.
          </li>
          <li>
            It shall approve each action and resolution in the name of this
            Association before the same shall become effective.
          </li>
        </ol>

        <h4>Section 6. Representation of the Association</h4>
        <p>
          Members of the Council will be the official representatives of the
          Association on all formal and official functions both in Pakistan and
          in North America. In case fewer members are required to be present on
          these occasions, orders of seniority for the composition of a
          delegation shall be as follows: President, President elect,
          Secretary, Treasurer, the Immediate Past President, one of the
          Representatives or an appointee of the President.
        </p>

        <h4>Section 7. Resolutions</h4>
        <p>
          Each resolution introduced in the Council shall be introduced by a
          Councilor. The President may refer it to the proper reference
          committee before an action is taken thereon.
        </p>
      </>
    ),
  },
  {
    title: "Chapter 7: OFFICERS",
    content: (
      <>
        <h4>Section 1. Qualifications of the Officers</h4>
        <p>
          All officers of the Association shall have been members in good
          standing for two consecutive years prior to being considered for an
          office, unless there is no other suitable candidate. All members of
          the Executive Council must be members of the parent organization,
          APPNA.
        </p>

        <h4>Section 2. President</h4>
        <p>
          The President shall be the general executive officer of the
          Association. She shall preside at all meetings of the Association
          and shall deliver the President’s address. She shall appoint
          necessary committees when not otherwise provided for, and fill
          vacancies thereon. The President will serve the term of office for
          one year. She will hold the office of Immediate Past President at the
          conclusion of her term as President.
        </p>

        <h4>Section 3. President-Elect</h4>
        <p>
          The President-Elect shall act for the President in her absence or
          disability. Should the office of President become vacant, the
          President-Elect shall succeed to the Presidency for the unexpired
          term.
        </p>

        <h4>Section 4. Secretary</h4>
        <p>
          The Secretary shall be the recording officer of the executive council
          and the general body. She shall also discharge the following duties:
        </p>

        <ol type="a">
          <li>
            She shall supervise all arrangements for the holding of each
            meeting in compliance with the Constitution and Bylaws and
            instructions of the Executive Council.
          </li>
          <li>
            She shall send out all official notices of the meetings, committee
            appointments, certificates of election to the office and special
            committee assignments.
          </li>
          <li>
            She shall receive and transmit to the Executive Council the annual
            and other reports of officers and committees.
          </li>
          <li>
            She shall institute and correlate each new activity of the
            Association under the supervision of the Council.
          </li>
          <li>
            She shall perform such other duties as are imposed upon her by the
            Association.
          </li>
        </ol>

        <h4>Section 5. Treasurer</h4>
        <p>
          The Treasurer shall be the custodian of all the invested funds and
          the securities under the direction and control of the Executive
          Council of the Association. She shall be accountable through the
          Council to the Association. She shall also discharge the following
          duties:
        </p>

        <ol type="a">
          <li>
            Collect all annual membership dues, assessments, donations and
            such Monies as may be due to the Association and keep membership
            records.
          </li>
          <li>
            She shall deposit all funds received in an approved depository and
            disburse them upon the order of the Executive Council.
          </li>
          <li>
            She shall present the annual report at the annual general meeting
            of the Association.
          </li>
          <li>
            She shall perform such other duties as are imposed upon her by the
            Constitution and Bylaws of the Association.
          </li>
        </ol>

        <h4>Section 6. Term of Office</h4>
        <p>
          Except as herein provided, officers shall take office on January 1 of
          each year and serve until December 31 of that year.
        </p>
      </>
    ),
  },
  {
    title: "Chapter 8: COMMITTEES OF THE ASSOCIATION",
    content: (
      <>
        <p>
          The President with the advice of the Executive Council shall appoint
          standing Committees of the Association. (See Appendix A for the
          composition and functions of the committees).
        </p>

        <ul>
          <li>Nominations and Election Committee</li>
          <li>Publications Committee</li>
          <li>Finance Committee</li>
          <li>Membership Committee</li>
          <li>Constitution and Bylaws Committee</li>
          <li>Committee for Social Welfare Projects</li>
          <li>Local Host Committee</li>
          <li>Any other committee deemed necessary by the President.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Chapter 9: ELECTION",
    content: (
      <>
        <h4>Section 1. Nominations</h4>
        <p>
          The nominating committee shall seek nominations from the general
          membership at least two (2) months before the annual meeting. After
          considering the nominations so received, the nominating committee
          will submit a slate of candidates for various officers of the
          Association and two (2) Representatives, to all members at least one
          (1) month before the annual meeting, along with a short resume of the
          candidate. There shall be at least one nominee for each position.
          For an officer of the Association, other candidates who have received
          at least three (3) nominations from those members who have been in
          good standing for at least two (2) years, shall be included on the
          ballot in addition to the nominee of the nomination committee.
        </p>

        <h4>Section 2. Elections</h4>
        <p>
          Election of the Executive council will be held by secret ballot
          during the general body meeting. No Nominations will be accepted
          from the floor except as otherwise indicated below in section #3.
        </p>

        <h4>Section 3</h4>
        <p>
          All candidates, who are running for a position in the Executive
          Council, must be present. If for some reason they cannot attend the
          annual general body meeting their name will be withdrawn from the
          slate. Only in this case the nominating committee shall seek for
          another nomination from the floor.
        </p>
      </>
    ),
  },
  {
    title: "Chapter 10: VACANCIES",
    content: (
      <>
        <h4>Section 1</h4>
        <p>
          An office of the Association will be declared vacant by the Council
          if an officer resigns or leaves North America for a period of more
          than four (4) months without pre arrangement with the Council, or
          becomes unable to carry out the duties of the office for reasons of
          health or otherwise.
        </p>

        <h4>Section 2</h4>
        <p>
          Should the office of the President become vacant, the President-Elect
          shall succeed to the Presidency for the unexpired term.
        </p>

        <h4>Section 3</h4>
        <p>
          The vacancy of the President-Elect will be filled in the following
          manner: If it happens within six (6) months of the term of this
          office, the vacancy will be filled by a special election directed by
          the President. If the duration of the vacancy is less than six (6)
          months, the vacancy shall remain vacant till the next election time,
          when the nominating committee will seek nomination for both the
          President and the President-Elect for the next term.
        </p>

        <h4>Section 4</h4>
        <p>
          The vacant office of the Past President shall remain vacant till the
          end of that term.
        </p>

        <h4>Section 5</h4>
        <p>
          Vacancy of the position of the Secretary or the Treasurer shall be
          filled by election from among the members of the Council.
        </p>

        <h4>Section 6</h4>
        <p>
          Council from amongst the members of the Association will fill the
          vacant post of the Councilor-at-Large.
        </p>
      </>
    ),
  },
  {
    title: "Chapter 11: AMENDMENTS",
    content: (
      <>
        <p>These bylaws may be amended with the following procedure:</p>

        <ol type="a">
          <li>
            An amendment may be proposed by any member of the Executive
            Council or Board of Trustees by submitting such proposal to the
            Constitution and Bylaws committee.
          </li>
          <li>
            The Constitution and Bylaws Committee shall submit to the Executive
            Council any amendments submitted to it along with its
            recommendations and comments.
          </li>
          <li>
            Adoption of the amendment shall require the affirmative vote of 50%
            of the Executive Council members eligible to vote and present at
            said meeting of the Council.
          </li>
          <li>
            The amendment thus approved shall be presented at the next annual
            meeting of the Association and shall be approved by 50% vote in
            its favor. The notice for such amendment will be sent out at least
            thirty (30) days prior to the meeting. If there is lack of quorum
            at the general body meeting, it shall be put to vote by mail with a
            clear statement that a non response within thirty (30) days of
            mailing of the ballot shall be counted as a yes vote.
          </li>
        </ol>
      </>
    ),
  },
];

const APPENDIX = [
  {
    title: "A. Nominations and Election Committee",
    items: [
      "This committee shall develop rules and regulations for and conduct elections for the Association in accordance with the Constitution and Bylaws.",
      "Throughout the year, the committee will seek out and evaluate and help develop future leaders of the Association.",
      "The committee shall be composed of members appointed by the President, to serve a term of one year.",
      "This committee will verify the qualifications of all prospective nominees according to the constitution and bylaws.",
    ],
  },
  {
    title: "B. Publications Committee",
    items: [
      "This committee will be responsible for all publications of the Association including newsletter, directory, and other publications that the Executive Council may decide to publish.",
      "The committee will develop mechanisms and raise funds to support the publication of the Association so that they become at least a budget neutral project.",
    ],
  },
  {
    title: "C. Finance Committee",
    items: [
      "The committee shall develop policy and procedure regarding the financial affairs of the Association.",
      "The committee will be responsible for the overall budget of the Association.",
      "The committee shall oversee all the financial activities of the Association, including all the expenses.",
      "The committee shall present a quarterly report of all the financial activities of the Association.",
    ],
  },
  {
    title: "D. Membership Committee",
    items: [
      "The membership committee shall be responsible for the development of programs for enrollment and retention of members.",
      "The committee will develop a membership benefit package to make membership in the Association attractive to potential members.",
      "The committee will study the needs and desires of the members and potential members and make appropriate recommendations to the Executive Council.",
    ],
  },
  {
    title: "E. Constitution and Bylaws Committee",
    items: [
      "The committee will be responsible for reviewing and developing recommendations to the Constitution and Bylaws to keep the organizational structure and function responsive to the current needs.",
      "The chairperson of this committee will serve as a resource person to the Association for parliamentary procedure.",
    ],
  },
  {
    title: "F. Committee for Social Welfare Projects",
    items: [
      "This committee will raise funds and material goods for charitable purposes following the accepted methods used by various national and international organizations.",
      "The committee will disburse the funds or material goods to the needy individuals, institutions and organizations according to the availability under the guideline provided by the Executive Council.",
      "It will develop rules and regulations for its own governance, which will be approved by the Executive Council.",
    ],
  },
  {
    title: "G. Local Host Committee",
    items: [
      "This committee will assist the officers in the local arrangements for the Association annual meetings.",
    ],
  },
];

const EGC_SECTIONS = [
  {
    title: "SECTION A: GENERAL",
    content: (
      <>
        <p>
          a. The Ethics and Grievance Committee (EGC) shall hear any written
          complaint brought by any member(s)/council/committee of FJMCAANA who
          believe they have been wronged by the actions of others
        </p>

        <p>b. The Ethics and Grievance Committee (EGC) may provide:</p>

        <ol>
          <li>
            Advisory opinions to FJMCAANA members and officers on questions
            concerning ethical standards and practices
          </li>
          <li>
            Help educate the membership and officers about their ethical
            obligations, as relevant
          </li>
          <li>
            Provide professional guidance around ethical conduct, if needed
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "SECTION B: COMPOSITION",
    content: (
      <ol>
        <li>
          The EGC shall be composed of 3 members, including its Chair
        </li>
        <li>
          Three members shall be elected each year by FJMCAANA Executive
          Committee (EC) for a two-year term.
        </li>
        <li>
          The Chair shall be elected by the members of the EGC & EC from among
          the members in the first 30 days of the EGC term initiation
        </li>
        <li>
          The Chair shall be responsible for keeping the FJMCAANA EC & BOT
          informed of the Committee’s activities by way of reports, as
          needed/requested.
        </li>
      </ol>
    ),
  },
  {
    title: "SECTION C: QUALIFICATIONS OF MEMBERS",
    content: (
      <ol>
        <li>
          Committee members shall be members of the FJMCAANA Association in
          good standing for the previous 3 consecutive years.
        </li>
        <li>
          An EGC appointee should have served FJMCAANA in one of the following
          capacities as:
          <ol>
            <li>an officer on the EC and/or</li>
            <li>a member of the FJMCAANA BOT</li>
          </ol>
        </li>
        <li>
          The EGC member:
          <ol>
            <li>
              Should have completed the above-mentioned positions (EC and/or
              BOT) at least two (2) years prior to the appointment with the EGC
            </li>
            <li>
              Shall not be eligible to contest for any elected position in
              FJMCAANA for two (2) years after their tenure as a member of the
              EGC
            </li>
            <li>Shall not serve two consecutive 2-year terms.</li>
          </ol>
        </li>
      </ol>
    ),
  },
  {
    title: "SECTION D: MANNER OF APPOINTMENT",
    content: (
      <>
        <ol>
          <li>
            The FJMCAANA EC and/BOT shall recommend five members for
            consideration for the EGC
          </li>
          <li>
            The EC shall vet all candidates and present a slate with a brief
            biodata of each candidate to the BOT and general membership
          </li>
          <li>
            The top three (3) nominees receiving the highest votes from the EC,
            BOT & general membership shall be elected as the EGC members
          </li>
          <li>
            Chair of the EGC will be elected by the newly elected members along
            with the FJMCAANA EC
          </li>
        </ol>

        <p>The President of FJMCAANA shall announce the results to the membership.</p>

        <p>
          The tenure of the EGC shall begin on July 1st, 2026.
        </p>
      </>
    ),
  },
  {
    title: "SECTION E: MEETINGS",
    content: (
      <ol>
        <li>
          All tasks and affairs of the EGC shall be conducted through a duly
          convened meeting.
        </li>
        <li>
          A meeting may be called by the Chair or by member(s). A written
          notice of seventy-two (72) hours shall be required for all regular
          meetings.
        </li>
        <li>
          The Chair may call a meeting with less than seventy-two (72) hours’
          notice for an urgent matter.
        </li>
        <li>
          The presence of a majority of the EGC members shall constitute a
          quorum for any meeting if the Chair is present (one member with the
          chair)
        </li>
        <li>
          All decisions shall be made by the affirmative vote of at least two
          members, one of them may be the Chair.
        </li>
        <li>
          Matters involving any recommendation for punitive action(s) against
          an FJMCAANA member for ethical misconduct require a minimum
          affirmative vote of two members, one of them may be the Chair. The
          recommendation is made to the EC for further determination.
        </li>
      </ol>
    ),
  },
  {
    title: "SECTION F: DUTIES AND RESPONSIBILITIES",
    content: (
      <ol>
        <li>
          The Committee may receive, review, and decide on all ethical conduct
          matters and grievances brought forward by any member(s)/Committee(s)/
          Council or BOT.
        </li>
        <li>
          The Committee shall develop guidelines, policies, and procedures
          regarding the performance of its duties that ensure each member’s
          rights and due process within 90 days of EGC being appointed. The EGC
          shall present these SOPs to the EC & BOT for approval.
        </li>
        <li>
          The EGC policies shall include mandatory training to be completed by
          the new appointees within the first thirty (30) days of the
          appointment and or after approval by the EC whichever comes first
        </li>
        <li>
          A written complaint may be filed with the Committee within thirty
          (30) days of the incident.
        </li>
        <li>
          In some instances, the EGC may appoint a mediator to resolve the
          conflict as relevant. If the mediation is not successful, the EGC
          shall issue a written decision to the concerned parties within
          forty-five (45) days of the filing of the complaint(s).
        </li>
        <li>
          The EGC shall present its decision to the EC for action. The EC shall
          implement all actionable items.
        </li>
        <li>
          An appeal to the decision may be made to the EC within thirty (30)
          days. The EC shall act on the appeal within fourteen (14) days. The
          EC may overturn the decision of the EGC by a two-thirds (2/3)
          majority of the EC members, and no further actions can be taken by
          the EGC.
        </li>
        <li>
          If the above process is not successful, any party may seek external
          mediation and, if needed, legal arbitration on the ruling of the EGC
          or the EC at their own expense. The decision of the arbitration panel
          shall be final. No judicial or extrajudicial recourse is allowed by
          the Association.
        </li>
        <li>
          The EGC may consider some items confidential. All matters that are
          strictly confidential shall not be shared outside the EGC.
        </li>
        <li>
          Minutes of the meetings that are not confidential will be released to
          the membership pursuant to the applicable law(s).
        </li>
      </ol>
    ),
  },
];

function DocumentSection({ title, children }) {
  return (
    <section className="border-b border-pine/10 py-10 last:border-b-0">
      <h2 className="mb-5 font-display text-2xl font-semibold text-pine-dark sm:text-3xl">
        {title}
      </h2>

      <div className="document-content text-[15px] leading-8 text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export default function ConstitutionBylawsPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="About FJMCAANA"
        title="Constitution & Bylaws"
        description="The Constitution and Bylaws governing the Fatima Jinnah Medical College Alumni Association of North America."
      />

      <main className="bg-cream">
        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
          <div className="rounded-2xl border border-pine/10 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-gold/20 px-4 py-2 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-pine-dark">
                Official Document
              </span>

              <h2 className="mt-6 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                Fatima Jinnah Medical College Alumni Association
              </h2>

              <p className="mt-4 text-sm font-semibold leading-7 text-pine-dark">
                Established in 1983. 1st Amended and Approved in the year One
                Millennium and Ninty Nine. Re-Amended on 7th day of July in
                the year Two Millennium and Six.
              </p>
            </div>

            <div className="rounded-xl bg-sage/40 p-6 sm:p-8">
              <p className="font-display text-lg font-semibold italic text-pine-dark">
                In the name of God, the beneficent, the merciful.
              </p>

              <h3 className="mt-7 font-display text-2xl font-semibold text-pine-dark">
                Preamble
              </h3>

              <div className="mt-4 space-y-5 text-[15px] leading-8 text-ink-soft">
                <p>
                  We the graduates of Fatima Jinnah Medical College, out of our
                  conviction for our profession, motherland, and alma mater do
                  hereby proclaim the establishment of the Fatima Jinnah
                  Medical College Alumni as a component society of the
                  Association of Pakistani Physicians of North America. So that
                  collectively we all can uphold ethical and moral values,
                  engage in professional and social activities, support
                  educational and intellectual pursuits, upgrade medical care
                  and thus glorify our association.
                </p>

                <p>
                  To this effect, we hereby set forth and enact the following
                  laws governing the association, which shall be binding on
                  each and all of us in totality, until and unless properly
                  amended by the provisions herein. So help us, God. Amen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Constitution */}
        <section className="bg-sage/20 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-gold" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                The Constitution
              </h2>
            </div>

            <div className="rounded-2xl border border-pine/10 bg-white px-6 shadow-sm sm:px-10">
              {ARTICLES.map((article) => (
                <DocumentSection key={article.title} title={article.title}>
                  {article.content}
                </DocumentSection>
              ))}
            </div>
          </div>
        </section>

        {/* Bylaws */}
        <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-gold" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
              Bylaws
            </h2>
          </div>

          <div className="rounded-2xl border border-pine/10 bg-white px-6 shadow-sm sm:px-10">
            {BYLAW_CHAPTERS.map((chapter) => (
              <DocumentSection key={chapter.title} title={chapter.title}>
                {chapter.content}
              </DocumentSection>
            ))}
          </div>
        </section>

        {/* Appendix */}
        <section className="bg-sage/20 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-gold" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                Appendix A
              </h2>
            </div>

            <div className="rounded-2xl border border-pine/10 bg-white px-6 shadow-sm sm:px-10">
              {APPENDIX.map((committee) => (
                <DocumentSection
                  key={committee.title}
                  title={committee.title}
                >
                  <ol>
                    {committee.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </DocumentSection>
              ))}
            </div>
          </div>
        </section>

        {/* Ethics & Grievance */}
        <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
          <div className="mb-8">
            <span className="font-accent text-xs font-semibold uppercase tracking-[0.12em] text-pine-dark">
              Governance & Ethics
            </span>

            <h2 className="mt-3 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
              FJMCAANA: Ethics & Grievance Committee (EGC)
            </h2>
          </div>

          <div className="rounded-2xl border border-pine/10 bg-white px-6 shadow-sm sm:px-10">
            {EGC_SECTIONS.map((section) => (
              <DocumentSection key={section.title} title={section.title}>
                {section.content}
              </DocumentSection>
            ))}
          </div>
        </section>

        {/* Bottom note */}
        <section className="bg-pine-dark py-14 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-white">
              Constitution & Bylaws
            </h2>

            <p className="mt-4 text-base leading-7 text-cream/75">
              The Constitution and Bylaws provide the framework for the
              governance, membership, leadership, elections, committees,
              finances, and ethical responsibilities of FJMCAANA.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}




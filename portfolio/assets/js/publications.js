/* ============================================================
   publications.js
   Data + renderer for Dr. C. Ramachandran's research section.
   Generates cards with Copy BibTeX / Copy Harvard buttons.
   ============================================================ */

const CR_PUBLICATIONS = [
  // ---------- JOURNAL ARTICLES ----------
  {
    id: "j013", type: "journal", year: 2025,
    authors: "Ramachandran, C., Thirunavukkarasu, A., Ravi, R., Kavin, T.S., Shrivarsan, S.",
    title: "Geochemical signatures and petrogenesis of intraplate dolerite dykes in the Salem block, Southern Granulite Terrane, India: Evidence of arc and MORB affinities.",
    journal: "Acta Geochimica",
    doi: "10.1007/s11631-025-00830-6",
    link: "https://doi.org/10.1007/s11631-025-00830-6",
    role: "first"
  },
  {
    id: "j012", type: "journal", year: 2023,
    authors: "Ramachandran, C., Thirunavukkarasu, A., Ravi, R.",
    title: "Wall rock deformation, chilled margin, textural analysis, and displacement structures of Salem dolerites emplaced within the Southern Granulite Terrane, Tamilnadu, India.",
    journal: "Arabian Journal of Geosciences",
    volume: "16(1)", pages: "52",
    doi: "10.1007/s12517-023-11193-8",
    link: "https://link.springer.com/article/10.1007/s12517-023-11193-8",
    role: "first"
  },
  {
    id: "j011", type: "journal", year: 2023,
    authors: "Ramachandran, C., Thirunavukkarasu, A., Manobalaji, A., Ravi, R.",
    title: "Geochemical internal variations of Salem Dolerite dykes from Southern Granulite Terrane: Implications of petrogenetic processes in the dyke conduits.",
    journal: "Journal of Geology, Geography and Geoecology",
    volume: "32(1)", pages: "185-200",
    doi: "10.15421/112318",
    link: "https://doi.org/10.15421/112318",
    role: "first"
  },
  {
    id: "j010", type: "journal", year: 2025,
    authors: "Peedamparammal, J., Pangunny, P., Chandran, R., Sajikumar, J. B., Chothodi, S., Vijayan, D., Scaria, R.",
    title: "Inferences on the Geological History Through Soil Minerology, Palakkad Gap Region, South India.",
    journal: "Journal of Geographical Sciences and Education",
    volume: "3(3)", pages: "214-234",
    doi: "10.69606/geography.v3i03.311",
    link: "https://doi.org/10.69606/geography.v3i03.311",
    role: "co"
  },
  {
    id: "j009", type: "journal", year: 2025,
    authors: "Sakthivel, C., Thirunavukkarasu, A., Ramachandran, C.",
    title: "Assessment of groundwater fluctuation and rainfall in Salem region, Tamil Nadu, India.",
    journal: "Journal of Geology, Geography and Geoecology",
    volume: "34(2)", pages: "403-417",
    doi: "10.15421/112534",
    link: "https://doi.org/10.15421/112534",
    role: "co"
  },
  {
    id: "j008", type: "journal", year: 2024,
    authors: "Rameshkumar, S., Thirunavukkarasu, A., Ramachandran, C., Sakthivel, C., Kasilingam, C.",
    title: "Geochemistry, Petrology and Tectonic Settings of Dolerite Dykes of Ranipet District, Northern part of Southern Granulite Terrain, Tamil Nadu, India.",
    journal: "Journal of Geology, Geography and Geoecology",
    volume: "33(1)", pages: "164-177",
    role: "co"
  },
  {
    id: "j007", type: "journal", year: 2025,
    authors: "Rameshkumar, S., Thirunavukkarasu, A., Ramachandran, C., Sakthivel, C., Kasilingam, C.",
    title: "Petrogenesis and Geochemistry of Dolerite Dykes in Ranipet District, Northern Part of Southern Granulite Terrain, Tamil Nadu, India.",
    journal: "Indian Journal of Natural Sciences",
    volume: "16(89)", pages: "91048-91062",
    role: "co"
  },
  {
    id: "j006", type: "journal", year: 2023,
    authors: "Kasilingam, C., Thirunavukkarasu, A., Ramachandran, C.",
    title: "Spectral signatures for iron ore deposits in Tirthamalai area, Dharmapuri District, Tamil Nadu, India.",
    journal: "Journal of Applied and Natural Science",
    volume: "15(1)", pages: "107-115",
    role: "co"
  },
  {
    id: "j005", type: "journal", year: 2016,
    authors: "Thirunavukkarasu, A., Suresh, R., Sankar, M., Ramachandran, C., Kasilingam, C., Sakthivel, C.",
    title: "Ferride group of elements and their significance in the origin of Banded Magnetite-Quartzite (BMQ) of Tirthamalai Area, Dharmapuri District, Tamilnadu, India.",
    journal: "Journal of Applied Geochemistry",
    volume: "18(2)", pages: "149-154",
    role: "co"
  },
  {
    id: "j004", type: "journal", year: 2018,
    authors: "Ramkumar, M., Kumaraswamy, K., Balasubramani, K., Abdul Rahaman, S., Jegankumar, R., Kumara Ganesh, U., Manikandan, E., Balasundareshwaran, A., Prithiviraj, G., Ayyanthurai, R., Santosh, M., Nagarajan, R., Siddiqui, N. A., Mathew, M. J., Menier, D., Ramachandran, C., Sathyaseelan, M., Sivakumar, P.",
    title: "Discovery of buried historical structures in the Kaveri-Kollidam interfluve, southern India.",
    journal: "Archaeological Prospection",
    pages: "1-16",
    role: "co"
  },
  {
    id: "j003", type: "journal", year: 2021,
    authors: "Ravi, R., Aravindan, S., Ramachandran, C., Sanjay Kumar Balabantaray, Selvaraj, B., Santhakumar, K.",
    title: "Pore resistivity variation by Resistivity imaging technique in sedimentary part of main Gadilam river basin, Cuddalore District, Tamil Nadu, India.",
    journal: "Journal of Applied and Natural Science",
    volume: "13(1)", pages: "268-277",
    doi: "10.31018/jans.v13i1.2541",
    link: "https://doi.org/10.31018/jans.v13i1.2541",
    role: "co"
  },
  {
    id: "j002", type: "journal", year: 2022,
    authors: "Ramkumar, M., Balasubramani, K., Kumaraswamy, K., Santosh, M., Roy, P. D., Manobalaji, A., Ramachandran, C., George, S. L.",
    title: "Episodic habitation and abandonment of Neolithic civilization sites in the Vaigai River Basin, Southern India.",
    journal: "Geosystems and Geoenvironment",
    volume: "1(1)", pages: "100007",
    role: "co"
  },
  {
    id: "j001", type: "journal", year: 2017,
    authors: "Thirunavukkarasu, A., Rajendran, S., Suresh, R., Ramachandran, C., Sankar, M., Kasilingam, C., Sakthivel, C.",
    title: "Characterization Hyperspectral Signatures of Iron Ore Deposits of Tirthamalai Area, Dharmapuri District, Tamil Nadu, India.",
    journal: "Recent Trends in Hyperspectral Remote Sensing (Book Chapter, My Research Publications)",
    volume: "Article-2", pages: "ISBN 978-93-86546-40-1",
    role: "co"
  },

  // ---------- CONFERENCE PRESENTATIONS ----------
  {
    id: "c006", type: "conf", year: 2024,
    authors: "Ramachandran, C.",
    title: "Preliminary Structural Study of a Regional Scale Brittle Sinistral Slip Fault Identified from the Displacement of Mafic Dykes in Salem Block: Implications of Deformational Events in the Southern Granulite Terrain, India.",
    journal: "DST-SERB International Conference on Climatic Change and Environmental Sustainability (CCES-2024), Dept. of Geology, Periyar University, Salem, 24-25 Jan 2024.",
    role: "first"
  },
  {
    id: "c005", type: "conf", year: 2023,
    authors: "Ramachandran, C.",
    title: "Geochemical Internal Variations of Salem Dolerite Dykes from Southern Granulite Terrane: Implications of Petrogenetic Processes in the Dyke Conduits.",
    journal: "International Seminar on Recent Development in Geosciences (RDG-2023), Dept. of Geology, Periyar University, Salem, 23-24 Feb 2023. [Second Best Oral Presentation]",
    role: "first"
  },
  {
    id: "c004", type: "conf", year: 2022,
    authors: "Ramachandran, C.",
    title: "Synmagmatic Deformation, Mineral Alignment, Textural Analysis, and Displacement Structures of Salem Dolerites Emplaced within the Southern Granulite Terrane, Tamil Nadu, India.",
    journal: "International Conference on Water Resources and Management Strategies (WRMS-2022), Dept. of Geology, Periyar University, Salem, 11-12 Aug 2022.",
    role: "first"
  },
  {
    id: "c003", type: "conf", year: 2016,
    authors: "Ramachandran, C.",
    title: "Evaluation of Hydrogeochemical Characterization of Groundwater Using Geospatial Technology (Erode District).",
    journal: "5th International Conference of NAGI, Dept. of Geography, Bharathidasan University, Tiruchirappalli, 5-7 Feb 2016.",
    role: "first"
  },
  {
    id: "c002", type: "conf", year: 2016,
    authors: "Ramachandran, C.",
    title: "Characterization of hyperspectral signatures of iron ore deposits of Thirthamalai area, Dharmapuri district, Tamil Nadu, India.",
    journal: "National Symposium on Recent Trends in Hyper Spectral Remote Sensing (RECEHSRS-2016), Dept. of Earth Sciences, Annamalai University, 20-21 Oct 2016.",
    role: "first"
  },
  {
    id: "c001", type: "conf", year: 2015,
    authors: "Ramachandran, C.",
    title: "Shoreline Changes along the Kanchipuram Coast Using Geospatial Techniques.",
    journal: "International Conference on Geosciences and Environment & 32nd Annual Convention of Indian Association of Sedimentologists (ICGENIAS-2015), Dept. of Earth Sciences, Annamalai University, 7-10 Jan 2015.",
    role: "first"
  }
];

/* -------- helpers -------- */
function _bibKey(p) {
  const first = p.authors.split(",")[0].trim().split(" ")[0];
  return first + p.year + p.id;
}
function buildBibTeX(p) {
  const key = _bibKey(p);
  const kind = p.type === "conf" ? "inproceedings" : "article";
  let s = `@${kind}{${key},\n`;
  s += `  author  = {${p.authors}},\n`;
  s += `  title   = {${p.title.replace(/\.$/,"")}},\n`;
  s += `  ${p.type === "conf" ? "booktitle" : "journal"} = {${p.journal}},\n`;
  if (p.volume) s += `  volume  = {${p.volume}},\n`;
  if (p.pages)  s += `  pages   = {${p.pages}},\n`;
  s += `  year    = {${p.year}}`;
  if (p.doi) s += `,\n  doi     = {${p.doi}}`;
  s += `\n}`;
  return s;
}
function buildHarvard(p) {
  let s = `${p.authors} (${p.year}). ${p.title} <em>${p.journal}</em>`;
  if (p.volume) s += `, ${p.volume}`;
  if (p.pages)  s += `, ${p.pages}`;
  s += ".";
  if (p.doi) s += ` https://doi.org/${p.doi}`;
  return s;
}

/* -------- card renderer -------- */
function renderPublications() {
  const container = document.querySelector("#portfolio .portfolio-container");
  if (!container) return;
  container.innerHTML = "";

  const sorted = [...CR_PUBLICATIONS].sort((a, b) => b.year - a.year);

  sorted.forEach(p => {
    const filterCls = p.type === "conf" ? "filter-conf" : "filter-journal";
    const badge = p.type === "conf" ? "Conference" : "Journal";
    const badgeColor = p.type === "conf" ? "#f0a91a" : "#1af07d";
    const linkHtml = p.link
      ? `<a href="${p.link}" target="_blank" class="pub-link"><i class="bi bi-box-arrow-up-right"></i> View</a>` : "";
    const bibId = "bibtex" + p.id;
    const harId = "harvard" + p.id;

    const card = document.createElement("div");
    card.className = `col-lg-12 portfolio-item ${filterCls}`;
    card.innerHTML = `
      <div class="pub-card">
        <span class="pub-badge" style="background:${badgeColor}">${badge} &middot; ${p.year}</span>
        <div class="pub-title">${p.title}</div>
        <div class="pub-authors">${p.authors.replace(/Ramachandran, C\.?/g, "<strong>Ramachandran, C.</strong>").replace(/Chandran, R\.?/g, "<strong>Chandran, R.</strong>")}</div>
        <div class="pub-venue"><em>${p.journal}</em>${p.volume ? ", " + p.volume : ""}${p.pages ? ", " + p.pages : ""}.</div>
        <div class="pub-actions">
          ${linkHtml}
          <button class="btn cite" onclick="copyCitation('${bibId}', this)">📋 Copy BibTeX</button>
          <button class="btn cite" onclick="copyCitation('${harId}', this)">📋 Copy Harvard</button>
        </div>
        <div class="pub-citations" style="display:none;">
          <textarea id="${bibId}" readonly>${buildBibTeX(p)}</textarea>
          <textarea id="${harId}" readonly>${buildHarvard(p).replace(/<[^>]+>/g, "")}</textarea>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* -------- copy citation to clipboard -------- */
function copyCitation(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = "block";
  el.select();
  document.execCommand("copy");
  el.style.display = "none";
  const orig = btn.innerHTML;
  btn.innerHTML = "✔ Copied";
  setTimeout(() => (btn.innerHTML = orig), 1500);
}

/* -------- init after DOM ready -------- */
document.addEventListener("DOMContentLoaded", renderPublications);

const team=[
    {
        name:'Sam Jahangard',
        image:'sam_jahangard.png',
        designation:'Founder & Principal Scientist',
        description:'Sam leads the Bio10 team with extensive experience in biotechnology and natural-based product development across multiple industries.'
    },
    {
        name:'Hossein Abdi',
        image:'default.png',
        designation:'Mechanical Systems Expert and Co-Founder',
        description:'Hossein designs custom machinery pathways to scale innovative R&D concepts for commercial production.'
    },
    {
        name:'Mic Shipley',
        image:'mic_shipley.png',
        designation:'Research Operations',
        description:'Mic specialises in aquaculture and environmental science, driving research and practical applications for innovative solutions.'
    },
    {
        name:'Jesse Levy',
        image:'jesse_levy.png',
        designation:'Marketing and Technical Expert',
        description:'Jesse combines sustainability expertise with a focus on product usability and scheduling to enhance market reach.'
    },
    {
        name:'Briar Wilder',
        image:'default.png',
        designation:'Communications Specialist',
        description:'Briar leads communications with a background in English Literature, ensuring effective messaging and audience engagement.'
    },
    {
        name:'Ladan Agrasi',
        image:'ladan_agrasi.png',
        designation:'Formulation Specialist',
        description:'Ladan is a PhD- level expert in aquaculture and animal nutrition, focusing on optimising agrichemical formulations.'
    },
    {
        name:'Ali Ghazjahanian',
        image:'default.png',
        designation:'Research Collaborator (Bioprocess)',
        description:'Ali leads a pilot bioreactor project, advancing bioprocessing capabilities through cutting-edge research.'
    },
    {
        name:'Flavio Raccanello',
        image:'default.png',
        designation:'Operations and Technical Expert',
        description:'Flavio focuses on optimising sprouted grain production for plant-based proteins and sustainable agriculture solutions.'
    },
    {
        name:'Motaz Abusafia',
        image:'default.png',
        designation:'Process Engineering Expert',
        description:'Motaz specialises in designing and scaling industrial machinery, ensuring the transition of R&D concepts to commercial solutions.'
    },
    {
        name:'Babak Roshani',
        image:'default.png',
        designation:'Environmental Engineering Innovator',
        description:'Babak collaborates on rapid bio composting technology, driving sustainable waste management innovations.'
    },
    {
        name:'Mostafa Aghaei',
        image:'default.png',
        designation:'Polymer Engineering Specialist',
        description:'Mostafa develops natural biopolymers, focusing on sustainability and product performance improvement.'
    },
    {
        name:'Muhammad Ibrahim',
        image:'default.png',
        designation:'Specialist Fabricator',
        description:'Muhammad constructs custom vessels for R&D projects, ensuring high-quality equipment for biotechnology innovations.'
    },
]

window.onload=function (){
    team.forEach(user => {
        const template = document.getElementById('team_tempalte').content.cloneNode(true);

        template.getElementById('name').innerText=user.name;
        template.getElementById('description').innerText=user.description;
        template.getElementById('designation').innerText=user.designation;
        template.getElementById('image').setAttribute('src','./images/team/'+user.image);
        template.getElementById('image').setAttribute('alt',user.name);

        document.getElementById('team_section').appendChild(template);
    });
}
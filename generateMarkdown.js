module.exports = function (data){

let license = link = "";

switch(data.license){
    case "cc": license ='Creative Commons license family'; link = "https://creativecommons.org/licenses/";  break;
    case "ecl-2.0": license = "Educational Community License v2.0" ; link = "https://opensource.org/license/ecl2-php/"; break;
    case "osl-3.0": license = "Open Software License 3.0"; link = "https://opensource.org/licenses/"; break;
    
}





    return `
# ${data.name_of_project}

## Description
${data.description}
    

## Installation Instructions
${data.installation_instructions}
    

## Data Usage Information
${data.usage_information}
    

## Contribution Guidelines
${data.contribution_guidelines}
    

## Instructions
${data.test_instructions}

## License
${license}
[${link}](${link})

    
`;

}

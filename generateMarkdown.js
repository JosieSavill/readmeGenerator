function generateMarkdown(data){
    return `
# ${data.name_of_project}

## Description
${data.description}
    `
}

module.exports = generateMarkdown
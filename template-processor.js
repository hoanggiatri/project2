"use strict";
function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillIn = function(dictionary) {
  return this.template.replace(/\{\{(\w+)\}\}/g, function(match, key) {
      return dictionary[key] || "";
  });
};

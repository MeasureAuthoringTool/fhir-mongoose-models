const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CodeSystemHierarchyMeaningSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CodeSystemHierarchyMeaning' },
  _type: { type: String, default: 'FHIR::CodeSystemHierarchyMeaning' },
});

class CodeSystemHierarchyMeaning extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemHierarchyMeaningSchema);
    this.typeName = 'CodeSystemHierarchyMeaning';
    this._type = 'FHIR::CodeSystemHierarchyMeaning';
  }
}

module.exports.CodeSystemHierarchyMeaningSchema = CodeSystemHierarchyMeaningSchema;
module.exports.CodeSystemHierarchyMeaning = CodeSystemHierarchyMeaning;

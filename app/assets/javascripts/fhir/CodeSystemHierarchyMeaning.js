const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodeSystemHierarchyMeaningSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CodeSystemHierarchyMeaning' },
});

class CodeSystemHierarchyMeaning extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemHierarchyMeaningSchema);
    this._type = 'FHIR::CodeSystemHierarchyMeaning';
  }
};


module.exports.CodeSystemHierarchyMeaningSchema = CodeSystemHierarchyMeaningSchema;
module.exports.CodeSystemHierarchyMeaning = CodeSystemHierarchyMeaning;

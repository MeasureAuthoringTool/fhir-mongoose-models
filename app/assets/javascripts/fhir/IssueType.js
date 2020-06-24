const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const IssueTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'IssueType' },
});

class IssueType extends mongoose.Document {
  constructor(object) {
    super(object, IssueTypeSchema);
    this._type = 'FHIR::IssueType';
  }
};


module.exports.IssueTypeSchema = IssueTypeSchema;
module.exports.IssueType = IssueType;

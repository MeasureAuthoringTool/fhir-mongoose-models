const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EvidenceVariableTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'EvidenceVariableType' },
});

class EvidenceVariableType extends mongoose.Document {
  constructor(object) {
    super(object, EvidenceVariableTypeSchema);
    this._type = 'FHIR::EvidenceVariableType';
  }
};


module.exports.EvidenceVariableTypeSchema = EvidenceVariableTypeSchema;
module.exports.EvidenceVariableType = EvidenceVariableType;

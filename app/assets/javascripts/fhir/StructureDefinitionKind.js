const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureDefinitionKindSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'StructureDefinitionKind' },
});

class StructureDefinitionKind extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionKindSchema);
    this._type = 'FHIR::StructureDefinitionKind';
  }
};


module.exports.StructureDefinitionKindSchema = StructureDefinitionKindSchema;
module.exports.StructureDefinitionKind = StructureDefinitionKind;

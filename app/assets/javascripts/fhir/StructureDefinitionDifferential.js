const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ElementDefinitionSchema } = require('./ElementDefinition');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureDefinitionDifferentialSchema = BackboneElementSchemaFunction({
   element : [ElementDefinitionSchema],
   fhirTitle: { type: String, default: 'StructureDefinitionDifferential' },
});

class StructureDefinitionDifferential extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionDifferentialSchema);
    this._type = 'FHIR::StructureDefinitionDifferential';
  }
};


module.exports.StructureDefinitionDifferentialSchema = StructureDefinitionDifferentialSchema;
module.exports.StructureDefinitionDifferential = StructureDefinitionDifferential;

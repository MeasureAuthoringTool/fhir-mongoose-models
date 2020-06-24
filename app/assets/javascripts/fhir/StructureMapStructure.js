const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { StructureMapModelModeSchema } = require('./StructureMapModelMode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapStructureSchema = BackboneElementSchemaFunction({
   url : String,
   mode : StructureMapModelModeSchema,
   alias : String,
   documentation : String,
   fhirTitle: { type: String, default: 'StructureMapStructure' },
});

class StructureMapStructure extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapStructureSchema);
    this._type = 'FHIR::StructureMapStructure';
  }
};


module.exports.StructureMapStructureSchema = StructureMapStructureSchema;
module.exports.StructureMapStructure = StructureMapStructure;

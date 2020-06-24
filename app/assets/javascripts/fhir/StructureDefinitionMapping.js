const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureDefinitionMappingSchema = BackboneElementSchemaFunction({
   identity : String,
   uri : String,
   name : String,
   comment : String,
   fhirTitle: { type: String, default: 'StructureDefinitionMapping' },
});

class StructureDefinitionMapping extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionMappingSchema);
    this._type = 'FHIR::StructureDefinitionMapping';
  }
};


module.exports.StructureDefinitionMappingSchema = StructureDefinitionMappingSchema;
module.exports.StructureDefinitionMapping = StructureDefinitionMapping;

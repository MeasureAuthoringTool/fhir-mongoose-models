const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExtensionContextTypeSchema } = require('./ExtensionContextType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureDefinitionContextSchema = BackboneElementSchemaFunction({
   type : ExtensionContextTypeSchema,
   expression : String,
   fhirTitle: { type: String, default: 'StructureDefinitionContext' },
});

class StructureDefinitionContext extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionContextSchema);
    this._type = 'FHIR::StructureDefinitionContext';
  }
};


module.exports.StructureDefinitionContextSchema = StructureDefinitionContextSchema;
module.exports.StructureDefinitionContext = StructureDefinitionContext;

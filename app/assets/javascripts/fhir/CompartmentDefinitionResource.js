const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ResourceTypeSchema } = require('./ResourceType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CompartmentDefinitionResourceSchema = BackboneElementSchemaFunction({
   code : ResourceTypeSchema,
   param : [String],
   documentation : String,
   fhirTitle: { type: String, default: 'CompartmentDefinitionResource' },
});

class CompartmentDefinitionResource extends mongoose.Document {
  constructor(object) {
    super(object, CompartmentDefinitionResourceSchema);
    this._type = 'FHIR::CompartmentDefinitionResource';
  }
};


module.exports.CompartmentDefinitionResourceSchema = CompartmentDefinitionResourceSchema;
module.exports.CompartmentDefinitionResource = CompartmentDefinitionResource;

const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImplementationGuideDefinitionGroupingSchema = BackboneElementSchemaFunction({
   name : String,
   description : String,
   fhirTitle: { type: String, default: 'ImplementationGuideDefinitionGrouping' },
});

class ImplementationGuideDefinitionGrouping extends mongoose.Document {
  constructor(object) {
    super(object, ImplementationGuideDefinitionGroupingSchema);
    this._type = 'FHIR::ImplementationGuideDefinitionGrouping';
  }
};


module.exports.ImplementationGuideDefinitionGroupingSchema = ImplementationGuideDefinitionGroupingSchema;
module.exports.ImplementationGuideDefinitionGrouping = ImplementationGuideDefinitionGrouping;
